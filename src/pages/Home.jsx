import React, {useState} from 'react';
import hero from '../assets/hero-hampers.webp';
import small from '../assets/small.webp';
import medium from '../assets/medium.webp';
import large from '../assets/large.webp';

const HAMPERS = [
  {id:'small', title:'Small Hamper', price:'₹475', images:[small]},
  {id:'medium', title:'Medium Hamper', price:'₹800', images:[medium]},
  {id:'large', title:'Large Hamper', price:'₹1350', images:[large]},
];

function Modal({open, onClose, hamper, onOrderClick, onEnquiryClick}){
  const [idx,setIdx]=React.useState(0);
  if(!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <div style={{display:'flex',gap:12}}>
          <div style={{flex:1}}>
            <img src={hamper.images[idx]} alt="" style={{width:'100%',height:360,objectFit:'cover',borderRadius:8}} />
            <div style={{display:'flex',gap:8,marginTop:8}}>
              <button onClick={()=>setIdx(i=>Math.max(0,i-1))} className="btn-ghost">Prev</button>
              <button onClick={()=>setIdx(i=>Math.min(idx+1,hamper.images.length-1))} className="btn-ghost">Next</button>
            </div>
          </div>
          <div style={{flex:1}}>
            <h2 style={{fontSize:20,fontWeight:600}}>{hamper.title}</h2>
            <p style={{color:'#666'}}>{hamper.price}</p>
            <p style={{marginTop:12,color:'#333'}}>Includes decorative items, lights, socks & mini tree. Perfect for compact home celebration.</p>
            <div style={{marginTop:16,display:'flex',gap:8}}>
              <button className="btn-primary" onClick={()=>onOrderClick(hamper)}>Order Now</button>
              <button className="btn-ghost" onClick={()=>onEnquiryClick(hamper)}>Enquire</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(){
  const [openHamper,setOpenHamper]=useState(null);
  const [orderHamper,setOrderHamper]=useState(null);
  const [enqHamper,setEnqHamper]=useState(null);
  const [showThank,setShowThank]=useState(null);

  function openModal(h){ setOpenHamper(h) }
  function closeModal(){ setOpenHamper(null) }

  return (
    <div>
      <section style={{height:420, backgroundImage:`url(${hero})`, backgroundSize:'cover', backgroundPosition:'center'}} className="flex items-center justify-center">
        <div style={{background:'rgba(0,0,0,0.35)',padding:24,borderRadius:8,color:'#fff',textAlign:'center'}}>
          <h1 style={{fontSize:34,marginBottom:8}}>Celebrate Christmas, Beautifully</h1>
          <p style={{marginBottom:12}}>Premium festive hampers for homes & offices in Delhi NCR.</p>
          <a href="#hampers" className="btn-primary">See Hampers</a>
        </div>
      </section>

      <section id="hampers" style={{padding:'40px 16px'}}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{fontSize:26,fontWeight:700,marginBottom:18}}>Our Hampers</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:16}}>
            {HAMPERS.map(h=>(
              <div key={h.id} style={{background:'#fff',borderRadius:8,padding:12,boxShadow:'0 6px 18px rgba(0,0,0,0.06)'}}>
                <img src={h.images[0]} alt="" style={{width:'100%',height:180,objectFit:'cover',borderRadius:6}} />
                <h3 style={{marginTop:8}}>{h.title}</h3>
                <p style={{color:'#666'}}>{h.price}</p>
                <div style={{display:'flex',gap:8,marginTop:8}}>
                  <button className="btn-primary" onClick={()=>openModal(h)}>View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden netlify forms for notifications; visible modals will submit to these */}
      <div style={{display:'none'}}>
        <form name="order-form" method="POST" data-netlify="true" action="/thank-you-order">
          <input type="hidden" name="form-name" value="order-form" />
          <input name="hamper" />
          <input name="name" />
          <input name="phone" />
          <input name="email" />
          <input name="address" />
          <input name="quantity" />
        </form>

        <form name="enquiry-form" method="POST" data-netlify="true" action="/thank-you-enquiry">
          <input type="hidden" name="form-name" value="enquiry-form" />
          <input name="hamper" />
          <input name="name" />
          <input name="phone" />
          <input name="email" />
          <input name="company" />
          <input name="quantity" />
          <textarea name="message"></textarea>
        </form>
      </div>

      {/* Order and Enquiry visible form modals */}
      <OrderEnquiryModals
        orderHamper={orderHamper} setOrderHamper={setOrderHamper}
        enqHamper={enqHamper} setEnqHamper={setEnqHamper}
        setShowThank={setShowThank} />

      {/* modal for hamper details */}
      <Modal open={!!openHamper} onClose={closeModal} hamper={openHamper||HAMPERS[0]} onOrderClick={(h)=>{ setOrderHamper(h); document.getElementById('order-open-btn')?.click(); }} onEnquiryClick={(h)=>{ setEnqHamper(h); document.getElementById('enquiry-open-btn')?.click(); }} />

      {showThank && (
        <div className="modal-backdrop" onClick={()=>setShowThank(null)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <h3>{showThank==='order' ? 'Thanks for your order!' : 'Thanks for your enquiry!'}</h3>
            <p>Our team will contact you within 2 hours to confirm payment and delivery.</p>
            <div style={{marginTop:12}}><button onClick={()=>setShowThank(null)} className="btn-primary">Close</button></div>
          </div>
        </div>
      )}
    </div>
  );
}

/* Inline component for visible modals */
function OrderEnquiryModals({orderHamper,setOrderHamper,enqHamper,setEnqHamper,setShowThank}){
  const [openOrder,setOpenOrder]=React.useState(false);
  const [openEnq,setOpenEnq]=React.useState(false);

  React.useEffect(()=>{
    if(orderHamper) setOpenOrder(true);
  },[orderHamper]);

  React.useEffect(()=>{
    if(enqHamper) setOpenEnq(true);
  },[enqHamper]);

  function handleOrderSubmit(e){
    e.preventDefault();
    const f = e.target;
    // submit to netlify via fetch as fallback
    const formData = new FormData(f);
    fetch('/', {method:'POST', body: formData}).then(()=>{ setOpenOrder(false); setOrderHamper(null); setShowThank('order'); }).catch(()=>{ setOpenOrder(false); setShowThank('order'); });
  }

  function handleEnquirySubmit(e){
    e.preventDefault();
    const f = e.target;
    const formData = new FormData(f);
    fetch('/', {method:'POST', body: formData}).then(()=>{ setOpenEnq(false); setEnqHamper(null); setShowThank('enquiry'); }).catch(()=>{ setOpenEnq(false); setShowThank('enquiry'); });
  }

  return (
    <>
      <button id="order-open-btn" style={{display:'none'}} onClick={()=>setOpenOrder(true)}>open</button>
      <button id="enquiry-open-btn" style={{display:'none'}} onClick={()=>setOpenEnq(true)}>open</button>

      {openOrder && (
        <div className="modal-backdrop" onClick={()=>{setOpenOrder(false); setOrderHamper(null);}}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <h3>Place your order</h3>
            <form name="order-form-visible" method="POST" data-netlify="true" action="/thank-you-order" onSubmit={handleOrderSubmit}>
              <input type="hidden" name="form-name" value="order-form" />
              <input name="hamper" defaultValue={orderHamper?.id || ''} />
              <label>Name<input name="name" required/></label>
              <label>Phone<input name="phone" required/></label>
              <label>Email<input name="email"/></label>
              <label>Address<textarea name="address"/></label>
              <label>Quantity<input name="quantity" defaultValue="1" type="number"/></label>
              <div style={{marginTop:12}}><button className="btn-primary" type="submit">Submit Order</button></div>
            </form>
            <div style={{marginTop:12}}><button onClick={()=>{ setOpenOrder(false); setOrderHamper(null); }}>Close</button></div>
          </div>
        </div>
      )}

      {openEnq && (
        <div className="modal-backdrop" onClick={()=>{setOpenEnq(false); setEnqHamper(null);}}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <h3>Send an enquiry</h3>
            <form name="enquiry-form-visible" method="POST" data-netlify="true" action="/thank-you-enquiry" onSubmit={handleEnquirySubmit}>
              <input type="hidden" name="form-name" value="enquiry-form" />
              <input name="hamper" defaultValue={enqHamper?.id || ''} />
              <label>Name<input name="name" required/></label>
              <label>Phone<input name="phone" required/></label>
              <label>Email<input name="email"/></label>
              <label>Company<input name="company"/></label>
              <label>Quantity<input name="quantity" type="number" defaultValue="30"/></label>
              <label>Message<textarea name="message"/></label>
              <div style={{marginTop:12}}><button className="btn-primary" type="submit">Submit Enquiry</button></div>
            </form>
            <div style={{marginTop:12}}><button onClick={()=>{ setOpenEnq(false); setEnqHamper(null); }}>Close</button></div>
          </div>
        </div>
      )}
    </>
  );
}
