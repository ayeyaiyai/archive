import React, { useState, useContext } from "react";
import '../styles/Mens.css';
import cards from '../components/cards';
import CartContext from "../context/cart/CartContext";

function Mens() {
  const { addToCart } = useContext(CartContext)
  const menCards = cards.filter(item => item.gender === 'men');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setShowOverlay(true);
  }

  const closeSelectedItem = () => {
    setSelectedItem(null);
    setShowOverlay(false);
  }

  return(
    <div className="mens">
      <div className="mens-image-section">Mens</div>
      <div className="mens-products">
        {menCards.map(item => (
          <div className='card' onClick={() => handleCardClick(item)}>
            <img src={item.src} alt={item.title} />
            <p className="price">{item.brand}</p>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="selected-overlay">
          <div className="selected-item">
            <div className="item-left">
              <img src={selectedItem.src} alt={selectedItem.title} className='item-image'/>
            </div>
            <div className="item-right">
            <div className="selected-brand">{selectedItem.brand}</div>
              <div className="selected-title">{selectedItem.title}</div>
              <div className="selected-price">${selectedItem.price}</div>
              <div className="selected-description">{selectedItem.description}</div>
              <button className="close-button" onClick={closeSelectedItem}>&#10005;</button>
              <div className="bottom-section">
                <button className="bottom-item add-to-cart" onClick={ ()=> addToCart(selectedItem) }>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Mens;