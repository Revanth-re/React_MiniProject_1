import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ rawData }) => {
  const [data,Setdata]=useState(true)
  useEffect(()=>{
    Setdata(false)
  })
  const navigate = useNavigate();
  const prodData = rawData;

  const handleAddToCart = (e, matchedProduct) => {
    e.stopPropagation(); // prevent card click
    let CartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    CartItems.push(matchedProduct);
    localStorage.setItem("cartItems", JSON.stringify(CartItems));
    alert(`🛒 Added to cart!`);
    navigate("/cart");
  };

  const handleAddToFavorites = (e, matchedProduct) => {
    e.stopPropagation(); // prevent card click
    let FavItems = JSON.parse(localStorage.getItem("FavItems")) || [];
    FavItems.push(matchedProduct);
    localStorage.setItem("FavItems", JSON.stringify(FavItems));
    alert("❤️ Added to favorites!");
      navigate("/FavSection");
  };

  return (
    <div className="product-wrapper" onClick={() => navigate(`/products/${prodData.id}`)}>
      {data ? "Fetching Data":
      <div>
        
      <Card className="product-card shadow-sm border-0 ">
        <Card.Img variant="top" src={prodData.image} className="product-image" />
        <Card.Body>
          <Card.Title className="product-title" style={{fontSize:"1rem"}}>{prodData.title}</Card.Title>
          <Card.Text className="product-category">{prodData.category}</Card.Text>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroup.Item className="product-detail">Color: {prodData.color}</ListGroup.Item>
          <ListGroup.Item className="product-detail">Brand: {prodData.brand}</ListGroup.Item>
          <ListGroup.Item className="product-price">Price: ${prodData.price}</ListGroup.Item>
        </ListGroup>

        <Card.Body className="product-buttons">
          <Button variant="primary" onClick={(e) => handleAddToCart(e, prodData)}>Add to Cart</Button>
          <Button variant="outline-secondary" onClick={(e) => handleAddToFavorites(e, prodData)}>Favorite</Button>
        </Card.Body>
      
      </Card>
      </div>
      }
      
    </div>
  );

};

export default Product;
