import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.cost * item.quantity), 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-header-total">Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            {/* The image below will now be larger based on the CSS change */}
            <img className="cart-item-image" src={item.image} alt={item.name} />
            
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">Unit Price: ${item.cost}</div>
              
              <div className="cart-item-quantity-controls">
                <button className="quantity-btn" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="quantity-btn" onClick={() => handleIncrement(item)}>+</button>
              </div>
              
              <div className="cart-item-total">Subtotal: ${item.cost * item.quantity}</div>
              <button className="delete-btn" onClick={() => dispatch(removeItem(item.name))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cart-footer">
        <button className="continue-shopping-btn" onClick={onContinueShopping}>Continue Shopping</button>
        <button className="checkout-btn" onClick={() => alert('Checkout: Coming Soon!')}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;