import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

/**
 * CartProvider — wraps the whole app.
 * Manages:
 *   • Cart items (add, remove, update qty)
 *   • Hamper modal (open/close with a selected hamper)
 *   • Checkout stage: 'idle' | 'cart' | 'form' | 'confirmed'
 *   • Completed order (for confirmation screen)
 */
export function CartProvider({ children }) {
  const [items, setItems]               = useState([]);
  const [selectedHamper, setSelectedHamper] = useState(null);
  const [checkoutStage, setCheckoutStage]   = useState('idle');
  const [order, setOrder]               = useState(null);

  /* ── Modal ── */
  const openModal  = useCallback((hamper) => setSelectedHamper(hamper), []);
  const closeModal = useCallback(() => setSelectedHamper(null), []);

  /* ── Cart actions ── */
  const addToCart = useCallback((hamper, qty = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.key === hamper.key);
      if (existing) {
        return prev.map(i =>
          i.key === hamper.key ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { ...hamper, qty }];
    });
  }, []);

  const removeFromCart = useCallback((key) => {
    setItems(prev => prev.filter(i => i.key !== key));
  }, []);

  const updateQty = useCallback((key, qty) => {
    if (qty <= 0) {
      setItems(prev => prev.filter(i => i.key !== key));
    } else {
      setItems(prev => prev.map(i => i.key === key ? { ...i, qty } : i));
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  /* ── Computed ── */
  const cartCount = items.reduce((sum, i) => sum + i.qty, 0);

  const cartTotal = items.reduce((sum, i) => {
    const num = parseInt(i.price.replace(/[₹,]/g, ''), 10) || 0;
    return sum + num * i.qty;
  }, 0);

  /* ── Drawer open/close ── */
  const openCart  = useCallback(() => setCheckoutStage('cart'), []);
  const closeCart = useCallback(() => setCheckoutStage('idle'), []);

  return (
    <CartContext.Provider value={{
      items, cartCount, cartTotal,
      addToCart, removeFromCart, updateQty, clearCart,
      selectedHamper, openModal, closeModal,
      checkoutStage, setCheckoutStage,
      order, setOrder,
      openCart, closeCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
