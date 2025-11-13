import React from 'react';
import logo from '../assets/logo.webp';

export default function Header(){
  return (
    <header className="header fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3" style={{background:'linear-gradient(90deg, #B30000, #0C3B2E)', color:'#fff'}}>
        <div className="flex items-center gap-3">
          <img src={logo} alt="Tyoohar Ghar" style={{height:44}} />
          <div>
            <div className="text-lg font-semibold">Tyoohar Ghar</div>
            <div className="text-xs" style={{color:'#ffe7b5'}}>Your One-Stop Festive Shop</div>
          </div>
        </div>

        <div className="text-sm text-white flex items-center gap-4">
          <div>tyooharghar@gmail.com</div>
          <div>+91 9599004265</div>
          <a href="https://instagram.com/tyooharghar" target="_blank" rel="noreferrer" style={{color:'#fff'}}>Instagram</a>
        </div>
      </div>
    </header>
  );
}