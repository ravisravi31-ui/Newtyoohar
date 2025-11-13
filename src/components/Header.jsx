import React from 'react';
export default function Header(){return (<header style={{position:'fixed',top:0,left:0,right:0,zIndex:50}}>
  <div style={{maxWidth:1100,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 16px',background:'linear-gradient(90deg,#B30000,#0C3B2E)',color:'#fff'}}>
    <div style={{display:'flex',alignItems:'center',gap:10}}><img src="/src/assets/logo.webp" alt="logo" style={{height:40}}/><div><div style={{fontWeight:700}}>Tyoohar Ghar</div><div style={{fontSize:12,color:'#ffe7b5'}}>Your One-Stop Festive Shop</div></div></div>
    <div style={{fontSize:13}}>tyooharghar@gmail.com | +91 9599004265 | <a href="https://instagram.com/tyooharghar" style={{color:'#fff'}}>Instagram</a></div>
  </div>
</header>)}