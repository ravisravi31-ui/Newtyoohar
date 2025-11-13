import React,{useState} from 'react';
import {Link} from 'react-router-dom';
export default function Header(){
const [open,setOpen]=useState(false);
return(<header style={{padding:'10px',background:'#b30000',color:'white'}}>
<nav>
<Link to="/">Home</Link> | 
<Link to="/order">Order</Link> |
<Link to="/enquiry">Corporate</Link> |
<Link to="/about">About</Link> |
<Link to="/contact">Contact</Link>
</nav>
</header>);
}