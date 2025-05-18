import React from 'react';
import { Table } from 'react-bootstrap';
import './Fav.css'; // Make sure to import your CSS file

const Fav = () => {
  const data = JSON.parse(localStorage.getItem("FavItems")) || [];

  const removeHandle = (indexToRemove) => {
    confirm("Are you Sure to Remove item From Favorites")
    const updated = data.filter((_, index) => index !== indexToRemove);
    localStorage.setItem("FavItems", JSON.stringify(updated));
    window.location.reload(); // Reload to update UI without using state
  };

  if (data.length === 0) {
    return <h2 className="empty-message">No Favorite Items Found</h2>;
  }

  return (
    <div className="container fav-container">
      <Table striped bordered hover className="fav-table">
        <thead>
          <tr className="fav-header-row">
            <th>Sl. No</th>
            <th>Product Title</th>
            <th>Color</th>
            <th>Brand</th>
            <th>Image</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, index) => (
            <tr key={index} className="fav-row">
              <td>{index + 1}</td>
              <td>{val.title}</td>
              <td>{val.color}</td>
              <td>{val.brand}</td>
              <td>
                <img src={val.image} alt={val.title} className="fav-image" />
              </td>
              <td><strong>${val.price}</strong></td>
              <td>
                <button className="remove-button" onClick={() => removeHandle(index)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Fav;
