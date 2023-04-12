import { useContext } from "react";
import '../styles/CartItem.css';
import CartContext from "../context/cart/CartContext";

const CartItem = ({ item, src, title }) => {
  const { removeItem }=useContext(CartContext)
  
  return (
    <div>
      <li className="cart-item">
        <div className="cart-left-side">
          <img src={src} alt="" />
        </div>
        <div className="cart-right-side">
          <div className="cart-right-top">
            <div className="cart-title">{title}</div>
            <div className="cart-price">${item.price}</div>
          </div>
          <div className="cart-right-bottom">
            <button className="remove-item" onClick={() => removeItem(item.id)}>remove</button>
          </div>
        </div>
      </li>
    </div>
  )
}

export default CartItem