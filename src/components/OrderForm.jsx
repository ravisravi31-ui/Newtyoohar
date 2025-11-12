import React from 'react'
export default function OrderForm(){ return (
  <form name="order-form" method="POST" data-netlify="true" data-netlify-recaptcha="true" action="/thank-you-order" className="space-y-4 bg-white p-6 rounded shadow">
    <input type="hidden" name="form-name" value="order-form" />
    <h2 className="text-xl font-semibold">Place Your Order</h2>
    <label>Name*<input name="name" required className="w-full border p-2 rounded mt-1"/></label>
    <label>WhatsApp*<input name="whatsapp" required className="w-full border p-2 rounded mt-1"/></label>
    <label>Email<input name="email" type="email" className="w-full border p-2 rounded mt-1"/></label>
    <label>Hamper<select name="hamper" className="w-full border p-2 rounded mt-1"><option value="small">Small</option><option value="medium">Medium</option><option value="large">Large</option></select></label>
    <label>Quantity<input name="quantity" type="number" defaultValue={1} min={1} className="w-full border p-2 rounded mt-1"/></label>
    <label>Address<textarea name="address" className="w-full border p-2 rounded mt-1"/></label>
    <div data-netlify-recaptcha="true"></div>
    <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">Submit Order</button>
  </form>
) }
