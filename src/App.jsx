import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';

export default function App(){
  return (
    <>
      <Header />
      <main className="pt-20">
        <Home />
      </main>
    </>
  );
}