import React, { useState, useEffect, useContext } from "react";
import '../styles/Header.css';
import cartIcon from '../images/cart-icon-2.png';
import { Link } from "react-router-dom";
import CartContext from "../context/cart/CartContext";

function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { cartItems, showHideCart } = useContext(CartContext)

  return (
    <div className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-title-section">
        <div className="header-title">ARCHIVE</div>
        <div className="header-links">
          <div className="header-link"><Link to={'/'}>Home</Link></div>
          <div className="header-link"><Link to={'/mens'}>Men</Link></div>
          <div className="header-link"><Link to={'/womens'}>Women</Link></div>
          <div className="header-link"><Link to={'/about'}>About</Link></div>
        </div>
      </div>
      <div className="cart">
        <img src={cartIcon} alt='cart-icon' onClick={showHideCart}/>
        { cartItems.length > 0 && <div className="items-in-cart"><span>{cartItems.length}</span></div>}
      </div>
    </div>
  )
}

export default Header;