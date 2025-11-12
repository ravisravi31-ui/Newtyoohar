import React from 'react'
export default function OrderForm({ defaultHamper }){
  return (
    <form name="order-form" method="POST" data-netlify="true" data-netlify-recaptcha="true" action="/thank-you-order" className="space-y-3">
      <input type="hidden" name="form-name" value="order-form" />
      <div className="form-field">
        <label className="block text-sm font-medium">Full name *</label>
        <input name="name" required className="w-full p-2 border rounded" />
      </div>
      <div className="form-field">
        <label className="block text-sm font-medium">WhatsApp number *</label>
        <input name="whatsapp" pattern="[0-9]{10}" required className="w-full p-2 border rounded" placeholder="10 digits" />
      </div>
      <div className="form-field">
        <label className="block text-sm font-medium">Email</label>
        <input name="email" type="email" className="w-full p-2 border rounded" />
      </div>
      <div className="form-field">
        <label className="block text-sm font-medium">Hamper</label>
        <input name="hamper" defaultValue={defaultHamper} className="w-full p-2 border rounded" />
      </div>
      <div className="form-field">
        <label className="block text-sm font-medium">Quantity</label>
        <input name="quantity" type="number" min="1" defaultValue="1" className="w-full p-2 border rounded" />
      </div>
      <div className="form-field">
        <label className="block text-sm font-medium">Address *</label>
        <textarea name="address" rows="3" required className="w-full p-2 border rounded"></textarea>
      </div>
      <div className="form-field">
        <label className="block text-sm font-medium">Notes</label>
        <textarea name="notes" rows="2" className="w-full p-2 border rounded"></textarea>
      </div>
      <div data-netlify-recaptcha="true"></div>
      <div className="flex gap-3 items-center">
        <button type="submit" className="gold-btn px-4 py-2 rounded">Submit Order</button>
      </div>
    </form>
  )
}
