import React from 'react'
export default function EnquiryForm({ defaultOrg='' }){
  return (
    <form name="enquiry-form" method="POST" data-netlify="true" data-netlify-recaptcha="true" action="/thank-you-enquiry" className="space-y-3">
      <input type="hidden" name="form-name" value="enquiry-form" />
      <div className="form-field">
        <label className="block text-sm font-medium">Full name *</label>
        <input name="name" required className="w-full p-2 border rounded" />
      </div>
      <div className="form-field">
        <label className="block text-sm font-medium">Organization *</label>
        <input name="organization" defaultValue={defaultOrg} required className="w-full p-2 border rounded" />
      </div>
      <div className="form-field">
        <label className="block text-sm font-medium">Email *</label>
        <input name="email" type="email" required className="w-full p-2 border rounded" />
      </div>
      <div className="form-field">
        <label className="block text-sm font-medium">WhatsApp number *</label>
        <input name="whatsapp" pattern="[0-9]{10}" required className="w-full p-2 border rounded" />
      </div>
      <div className="form-field">
        <label className="block text-sm font-medium">Estimated quantity *</label>
        <input name="quantity" type="number" min="1" defaultValue="30" required className="w-full p-2 border rounded" />
      </div>
      <div className="form-field">
        <label className="block text-sm font-medium">Message *</label>
        <textarea name="message" rows="3" required className="w-full p-2 border rounded"></textarea>
      </div>
      <div data-netlify-recaptcha="true"></div>
      <div className="flex gap-3 items-center">
        <button type="submit" className="gold-btn px-4 py-2 rounded">Submit Enquiry</button>
      </div>
    </form>
  )
}
