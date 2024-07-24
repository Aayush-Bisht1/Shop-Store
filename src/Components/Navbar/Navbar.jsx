import React,{useContext, useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo-mine.png'
import cart_icon from '../Assets/cart_icon.png'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const [menu,setMenu] = useState("Shop");
    const {getTotalCartItems} =useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="my-logo" />
            <p>SHOP STORE</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><NavLink style={{ textDecoration:'none'}} to='/'>Shop</NavLink >{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><NavLink style={{ textDecoration:'none'}} to='/mens'>Men</NavLink >{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><NavLink style={{ textDecoration:'none'}} to='/womens'>Women</NavLink >{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><NavLink style={{ textDecoration:'none'}} to='/kids'>Kids</NavLink >{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <NavLink style={{ textDecoration:'none'}} to='/login'><button>Login</button></NavLink>
            <NavLink style={{ textDecoration:'none'}} to='/cart'><img src={cart_icon} alt="my-cart" /></NavLink>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar