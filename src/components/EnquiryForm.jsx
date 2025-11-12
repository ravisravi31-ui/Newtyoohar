import React from "react";

export default function OrderForm() {
  return (
    <section className="order-section py-10 bg-white">
      <div className="max-w-lg mx-auto shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Place Your Order
        </h2>
        <form
          name="order-form"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true"
          action="/thank-you-order"
          className="space-y-4"
        >
          {/* This hidden input is crucial for Netlify */}
          <input type="hidden" name="form-name" value="order-form" />

          <div>
            <label className="block text-gray-700">Name *</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700">WhatsApp Number *</label>
            <input
              type="text"
              name="whatsapp"
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700">Select Hamper Size *</label>
            <select
              name="hamper"
              required
              className="w-full border p-2 rounded"
            >
              <option value="">Choose...</option>
              <option value="small">Small — ₹475</option>
              <option value="medium">Medium — ₹800</option>
              <option value="large">Large — ₹1200–1500</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Quantity *</label>
            <input
              type="number"
              name="quantity"
              required
              min="1"
              defaultValue="1"
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700">Address / Message</label>
            <textarea
              name="address"
              rows="3"
              className="w-full border p-2 rounded"
            ></textarea>
          </div>

          <div data-netlify-recaptcha="true"></div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Submit Order
          </button>
        </form>
      </div>
    </section>
  );
}
