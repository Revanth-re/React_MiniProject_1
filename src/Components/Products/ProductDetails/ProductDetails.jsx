import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css';
import Cart from '../../NavbarSection/CartSection/Cart';

const ProductDetails = ({ MainArray }) => {
  // navigate=useNavigate()
  const { id } = useParams();
  const matchedProduct = MainArray.find((x) => x.id === Number(id));

  if (!matchedProduct) {
    return <h2 className="not-found">Product not found.</h2>;
  }

  const handleAddToCart = (matchedProduct) => {
let CartItems =JSON.parse(localStorage.getItem("cartItems"))|| []
CartItems.push(matchedProduct)
    localStorage.setItem("cartItems", JSON.stringify(CartItems)) 
const data =JSON.parse(localStorage.getItem("cartItems")) 
console.log(data);


    alert(`🛒 added to cart!`);
    window.location.href="/cart"
    //  navigate("/cart")
  };

  const handleAddToFavorites = () => {

let FavItems =JSON.parse(localStorage.getItem("FavItems"))|| []
FavItems.push(matchedProduct)
    localStorage.setItem("FavItems", JSON.stringify(FavItems)) 
const data =JSON.parse(localStorage.getItem("FavItems")) 
console.log(data);
alert("added to favs")
    window.location.href="/FavSection"

// navigate("/FavSection")
  };

  return (
    <div className="product-container">
      <h1 className="product-title">{matchedProduct.title}</h1>
      <img
        src={matchedProduct.image}
        alt={matchedProduct.title}
        className="product-image"
      />
      <div className="product-info">
        <p><strong>Model:</strong> {matchedProduct.model}</p>
        <p><strong>Brand:</strong> {matchedProduct.brand}</p>
        <p><strong>Category:</strong> {matchedProduct.category}</p>
        <p><strong>Color:</strong> {matchedProduct.color}</p>
        <p><strong>Price:</strong> ₹{matchedProduct.price}</p>
        <p><strong>Discount:</strong> {matchedProduct.discount}% off</p>
        <p><strong>Description:</strong></p>
        <ul className="description-list">
          {matchedProduct.description.split('\n').map((line, index) => (
            <li key={index}>{line.trim()}</li>
          ))}
        </ul>

        <div className="button-group">
          <button id='btn2' className="btn cart-btn" onClick={()=>handleAddToCart(matchedProduct)}> Add to Cart</button>
          <button id='btn1' className="btn fav" onClick={()=>handleAddToFavorites(matchedProduct)}> Add to Favorites</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
