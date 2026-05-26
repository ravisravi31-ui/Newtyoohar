import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext.jsx';

/* ─────────────────────────────────────────────────────────────────────────
   FORMSPREE SETUP (one-time, takes 2 minutes):
   1. Go to https://formspree.io → Sign up free (use ravisravi31@gmail.com)
   2. Click "New Form" → name it "Tyoohar Ghar Orders"
   3. Copy your form ID (looks like: xpwzgkod)
   4. Replace YOUR_FORMSPREE_FORM_ID below with your actual form ID
   Free tier: 50 orders/month — upgrade if needed.
───────────────────────────────────────────────────────────────────────── */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_FORM_ID';

/* Generate a short, readable Order ID like TG-A3F9K2 */
function generateOrderId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let id = '';
  for (let i = 0; i < 6; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return `TG-${id}`;
}

/* ── Sub-component: Cart Items View ── */
function CartView({ onClose, onCheckout }) {
  const { items, cartTotal, removeFromCart, updateQty } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center flex-1 text-center px-6 py-12">
        <span className="text-6xl mb-4">🛒</span>
        <h3 className="font-display text-xl text-navy-brand mb-2">Your cart is empty</h3>
        <p className="font-body text-sm text-navy-light mb-6">Browse our hampers and add what you love</p>
        <button onClick={onClose} className="btn-primary text-sm px-6 py-2.5">Browse Hampers</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Items list */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
        {items.map(item => (
          <div key={item.key} className="flex gap-3 bg-cream-100 rounded-xl p-3">
            {/* Emoji thumbnail */}
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-gold-pale to-rose-pale flex items-center justify-center flex-shrink-0 text-2xl">
              {item.emoji || '🎁'}
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-display text-sm text-navy-brand leading-tight truncate">{item.name}</p>
              <p className="font-body text-xs text-rose-brand font-semibold mt-0.5">{item.price}</p>

              {/* Qty controls */}
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => updateQty(item.key, item.qty - 1)}
                  className="w-6 h-6 rounded-full bg-white border border-cream-300 flex items-center justify-center text-navy-brand hover:border-rose-brand hover:text-rose-brand transition-colors text-sm font-semibold"
                >−</button>
                <span className="font-body text-sm font-semibold text-navy-brand w-4 text-center">{item.qty}</span>
                <button
                  onClick={() => updateQty(item.key, item.qty + 1)}
                  className="w-6 h-6 rounded-full bg-white border border-cream-300 flex items-center justify-center text-navy-brand hover:border-rose-brand hover:text-rose-brand transition-colors text-sm font-semibold"
                >+</button>
              </div>
            </div>

            {/* Remove */}
            <button
              onClick={() => removeFromCart(item.key)}
              className="flex-shrink-0 w-7 h-7 rounded-full hover:bg-rose-pale flex items-center justify-center transition-colors mt-0.5"
              aria-label="Remove"
            >
              <svg className="w-4 h-4 text-navy-light hover:text-rose-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-cream-300 px-5 py-4 space-y-3 bg-white">
        <div className="flex justify-between items-center">
          <span className="font-body text-sm text-navy-mid">Total</span>
          <span className="font-display text-xl text-navy-brand">₹{cartTotal.toLocaleString('en-IN')}</span>
        </div>
        <p className="font-body text-xs text-navy-light">📦 Free delivery · ✍️ Handwritten card included</p>
        <button
          onClick={onCheckout}
          className="btn-primary w-full justify-center text-base py-3.5"
        >
          Place Order →
        </button>
      </div>
    </div>
  );
}

/* ── Sub-component: Order Form ── */
function OrderFormView({ onBack, onConfirm }) {
  const { items, cartTotal } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '', phone: '', address: '', pincode: '', cardMessage: '',
  });

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const orderId = generateOrderId();

    const itemsList = items
      .map(i => `${i.name} × ${i.qty} (${i.price} each)`)
      .join('\n');

    const totalAmount = `₹${cartTotal.toLocaleString('en-IN')}`;

    const payload = {
      orderId,
      customerName: form.name,
      phone: form.phone,
      deliveryAddress: form.address,
      pincode: form.pincode,
      cardMessage: form.cardMessage || '(none)',
      itemsOrdered: itemsList,
      orderTotal: totalAmount,
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        onConfirm({ ...payload, items, cartTotal });
      } else {
        /* If Formspree not set up yet, still let the order go through via WhatsApp */
        onConfirm({ ...payload, items, cartTotal, emailFailed: true });
      }
    } catch {
      /* Network error — still proceed to WhatsApp confirmation */
      onConfirm({ ...payload, items, cartTotal, emailFailed: true });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">

        <div className="bg-cream-100 rounded-xl p-3 text-sm font-body text-navy-mid">
          {items.length} item{items.length > 1 ? 's' : ''} · Total:{' '}
          <span className="font-semibold text-rose-brand">₹{cartTotal.toLocaleString('en-IN')}</span>
        </div>

        {/* Name */}
        <div>
          <label className="block font-body text-xs font-semibold text-navy-mid mb-1.5 uppercase tracking-wide">
            Your Name *
          </label>
          <input
            required
            type="text"
            placeholder="e.g. Priya Sharma"
            value={form.name}
            onChange={set('name')}
            className="w-full border border-cream-300 rounded-xl px-4 py-2.5 font-body text-sm text-navy-brand placeholder-navy-light/50 focus:outline-none focus:border-rose-brand focus:ring-1 focus:ring-rose-brand/20 transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-body text-xs font-semibold text-navy-mid mb-1.5 uppercase tracking-wide">
            WhatsApp Number *
          </label>
          <input
            required
            type="tel"
            placeholder="e.g. 9876543210"
            value={form.phone}
            onChange={set('phone')}
            className="w-full border border-cream-300 rounded-xl px-4 py-2.5 font-body text-sm text-navy-brand placeholder-navy-light/50 focus:outline-none focus:border-rose-brand focus:ring-1 focus:ring-rose-brand/20 transition-colors"
          />
          <p className="font-body text-xs text-navy-light mt-1">We'll confirm payment on this number</p>
        </div>

        {/* Address */}
        <div>
          <label className="block font-body text-xs font-semibold text-navy-mid mb-1.5 uppercase tracking-wide">
            Delivery Address *
          </label>
          <textarea
            required
            rows={3}
            placeholder="Flat/House no., Street, Area, City, State"
            value={form.address}
            onChange={set('address')}
            className="w-full border border-cream-300 rounded-xl px-4 py-2.5 font-body text-sm text-navy-brand placeholder-navy-light/50 focus:outline-none focus:border-rose-brand focus:ring-1 focus:ring-rose-brand/20 transition-colors resize-none"
          />
        </div>

        {/* Pincode */}
        <div>
          <label className="block font-body text-xs font-semibold text-navy-mid mb-1.5 uppercase tracking-wide">
            Pincode *
          </label>
          <input
            required
            type="text"
            placeholder="e.g. 110001"
            maxLength={6}
            value={form.pincode}
            onChange={set('pincode')}
            className="w-full border border-cream-300 rounded-xl px-4 py-2.5 font-body text-sm text-navy-brand placeholder-navy-light/50 focus:outline-none focus:border-rose-brand focus:ring-1 focus:ring-rose-brand/20 transition-colors"
          />
        </div>

        {/* Card message */}
        <div>
          <label className="block font-body text-xs font-semibold text-navy-mid mb-1.5 uppercase tracking-wide">
            Message for Handwritten Card{' '}
            <span className="normal-case font-normal text-navy-light">(optional)</span>
          </label>
          <textarea
            rows={3}
            placeholder="e.g. Happy Father's Day Papa! You're the best. Love always, Priya 💛"
            value={form.cardMessage}
            onChange={set('cardMessage')}
            className="w-full border border-cream-300 rounded-xl px-4 py-2.5 font-body text-sm text-navy-brand placeholder-navy-light/50 focus:outline-none focus:border-rose-brand focus:ring-1 focus:ring-rose-brand/20 transition-colors resize-none"
          />
        </div>

        {error && (
          <p className="font-body text-xs text-red-500 bg-red-50 rounded-lg px-3 py-2">{error}</p>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-cream-300 px-5 py-4 space-y-2 bg-white">
        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Placing Order…' : 'Confirm Order & Continue to WhatsApp →'}
        </button>
        <button
          type="button"
          onClick={onBack}
          className="w-full font-body text-sm text-navy-light hover:text-navy-brand transition-colors py-1.5"
        >
          ← Back to Cart
        </button>
      </div>
    </form>
  );
}

/* ── Sub-component: Order Confirmation ── */
function ConfirmationView({ order, onClose }) {
  const { clearCart } = useCart();

  const WA_BASE = 'https://wa.me/919599004265?text=';

  const waMessage = [
    `Hi Tyoohar Ghar! 🎁 I've just placed an order on your website.`,
    ``,
    `📋 Order ID: ${order.orderId}`,
    ``,
    `🛒 Items ordered:`,
    ...order.items.map(i => `   • ${i.name} × ${i.qty} (${i.price})`),
    ``,
    `💰 Total: ₹${order.cartTotal.toLocaleString('en-IN')}`,
    ``,
    `👤 Name: ${order.customerName}`,
    `📱 Phone: ${order.phone}`,
    `📍 Deliver to: ${order.deliveryAddress}, ${order.pincode}`,
    order.cardMessage !== '(none)' ? `✍️ Card message: "${order.cardMessage}"` : '',
    ``,
    `Please confirm my order and share payment details. Thank you!`,
  ].filter(l => l !== undefined).join('\n');

  const handleWhatsApp = () => {
    clearCart();
    window.open(`${WA_BASE}${encodeURIComponent(waMessage)}`, '_blank');
    onClose();
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col items-center text-center">

        {/* Success icon */}
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="font-display text-2xl text-navy-brand mb-1">Order Placed!</h3>
        <p className="font-body text-sm text-navy-mid mb-4">Your order details have been recorded.</p>

        {/* Order ID card */}
        <div className="bg-gold-pale border border-gold-light rounded-xl px-6 py-4 mb-5 w-full">
          <p className="font-body text-xs text-navy-light uppercase tracking-wider mb-1">Your Order ID</p>
          <p className="font-display text-3xl text-navy-brand tracking-wider">{order.orderId}</p>
          <p className="font-body text-xs text-navy-light mt-1">Save this for your reference</p>
        </div>

        {/* Order summary */}
        <div className="bg-cream-100 rounded-xl p-4 w-full text-left mb-4">
          <p className="font-body text-xs font-semibold text-navy-light uppercase tracking-wider mb-2">Order Summary</p>
          {order.items.map(i => (
            <div key={i.key} className="flex justify-between font-body text-sm text-navy-mid py-1 border-b border-cream-200 last:border-0">
              <span>{i.name} × {i.qty}</span>
              <span className="font-semibold">{i.price}</span>
            </div>
          ))}
          <div className="flex justify-between font-body text-sm font-semibold text-navy-brand pt-2 mt-1">
            <span>Total</span>
            <span>₹{order.cartTotal.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {order.emailFailed && (
          <p className="font-body text-xs text-amber-600 bg-amber-50 rounded-lg px-3 py-2 mb-3 w-full text-left">
            ℹ️ Email notification couldn't be sent — no worries, your order details will go to us via WhatsApp below.
          </p>
        )}

        <p className="font-body text-sm text-navy-mid">
          Next step: Open WhatsApp — your full order details will be pre-filled. We'll confirm and share payment info right away! 🎁
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-cream-300 px-5 py-4 bg-white">
        <button
          onClick={handleWhatsApp}
          className="btn-whatsapp w-full justify-center text-base py-3.5"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Continue on WhatsApp (Order {order.orderId})
        </button>
      </div>
    </div>
  );
}

/* ── Main CartDrawer ── */
export default function CartDrawer() {
  const { checkoutStage, setCheckoutStage, cartCount, closeCart } = useCart();
  const [completedOrder, setCompletedOrder] = useState(null);

  const isOpen = checkoutStage !== 'idle';

  /* Close on Escape */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === 'Escape') closeCart(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, closeCart]);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const title =
    checkoutStage === 'cart'      ? `My Cart (${cartCount})` :
    checkoutStage === 'form'      ? 'Your Details' :
    checkoutStage === 'confirmed' ? 'Order Confirmed!' : '';

  return (
    <div className="fixed inset-0 z-[150] flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={closeCart} />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full flex flex-col shadow-2xl animate-slideLeft">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-cream-300">
          <div className="flex items-center gap-2">
            {checkoutStage === 'form' && (
              <button
                onClick={() => setCheckoutStage('cart')}
                className="p-1.5 rounded-full hover:bg-cream-100 transition-colors mr-1"
                aria-label="Back"
              >
                <svg className="w-4 h-4 text-navy-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <h2 className="font-display text-lg text-navy-brand">{title}</h2>
          </div>
          <button
            onClick={closeCart}
            className="w-8 h-8 rounded-full hover:bg-cream-100 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5 text-navy-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Stage content */}
        {checkoutStage === 'cart' && (
          <CartView
            onClose={closeCart}
            onCheckout={() => setCheckoutStage('form')}
          />
        )}

        {checkoutStage === 'form' && (
          <OrderFormView
            onBack={() => setCheckoutStage('cart')}
            onConfirm={(order) => {
              setCompletedOrder(order);
              setCheckoutStage('confirmed');
            }}
          />
        )}

        {checkoutStage === 'confirmed' && completedOrder && (
          <ConfirmationView
            order={completedOrder}
            onClose={closeCart}
          />
        )}
      </div>
    </div>
  );
}
