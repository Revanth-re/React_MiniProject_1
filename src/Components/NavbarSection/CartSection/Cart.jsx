import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(saved);
  }, []);

  const handleRemove = (indexToRemove) => {
    if (window.confirm("Are you sure to remove item?")) {
      const updated = cartItems.filter((_, index) => index !== indexToRemove);
      setCartItems(updated);
      localStorage.setItem('cartItems', JSON.stringify(updated));
    }
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="cart-table-container">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Sl. No</th>
                  <th>Title</th>
                  <th>Color</th>
                  <th>Brand</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((val, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{val.title}</td>
                    <td>{val.color}</td>
                    <td>{val.brand}</td>
                    <td>
                      <img src={val.image} alt={val.title} className="cart-image" />
                    </td>
                    <td><strong>${val.price}</strong></td>
                    <td>
                      <button className="remove-btn" onClick={() => handleRemove(index)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="cart-card-grid">
            {cartItems.map((val, index) => (
              <div className="cart-card" key={index}>
                <img src={val.image} alt={val.title} className="cart-card-image" />
                <div className="cart-card-body">
                  <h4>{val.title}</h4>
                  <p><strong>Color:</strong> {val.color}</p>
                  <p><strong>Brand:</strong> {val.brand}</p>
                  <p><strong>Price:</strong> ${val.price}</p>
                  <button className="remove-btn" onClick={() => handleRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
