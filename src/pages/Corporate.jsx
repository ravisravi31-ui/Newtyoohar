import React, { useState } from 'react'
import EnquiryForm from '../components/EnquiryForm'
export default function Corporate(){
  const [open, setOpen] = useState(false)
  return (
    <main className='max-w-4xl mx-auto px-6 py-12'>
      <h1 className='text-3xl font-playfair mb-4'>Corporate Gifting</h1>
      <p className='text-gray-700 mb-6'>Custom branding, bulk discounts, and sample deliveries for offices in Delhi NCR.</p>
      <div className='bg-white/95 p-6 rounded-xl shadow mb-6'>
        <p className='mb-4'>Want a custom corporate hamper or bulk order? Click below to send us details and we'll prepare a quote.</p>
        <button onClick={()=>setOpen(true)} className='gold-btn px-4 py-3 rounded-md'>Get Quote</button>
      </div>
      {open && (<div className='modal-backdrop' onClick={()=>setOpen(false)}><div className='modal' onClick={(e)=>e.stopPropagation()}><EnquiryForm /><div className='mt-3 text-right'><button onClick={()=>setOpen(false)} className='px-3 py-2 text-sm'>Close</button></div></div></div>)}
    </main>
  )
}
