import { useContext } from "react";
import '../styles/Cart.css';
import CartContext from "../context/cart/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);

  return (
    <>
      {showCart && (
        <div className="cart-wrapper">
          <div className="cart-header">
            <button className="close-cart-button" onClick={showHideCart}>&#10005;</button>
            <div className="cart-total"><span className="subtotal">Subtotal:</span> <span className="cart-total-price">${cartItems.reduce((amount, item) => item.price + amount, 0)}</span></div>
          </div>
          <div className="cart-items">
            {cartItems.length === 0 ? (<div>cart is empty</div>) : (
              <div>
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} src={item.src} title={item.title} />
                ))}
              </div>
            )}
          </div>
          <div className="cart-bottom">
            <button className="checkout">Checkout</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Cart;