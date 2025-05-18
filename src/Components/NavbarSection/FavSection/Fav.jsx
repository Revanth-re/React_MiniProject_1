import React from 'react';
import './Fav.css';

const Fav = () => {
  const data = JSON.parse(localStorage.getItem("FavItems")) || [];

  const removeHandle = (indexToRemove) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      const updated = data.filter((_, index) => index !== indexToRemove);
      localStorage.setItem("FavItems", JSON.stringify(updated));
      // window.location.reload(); // Simulate state update
    }
  };

  if (data.length === 0) {
    return <h2 className="empty-message">No Favorite Items Found</h2>;
  }

  return (

    <div>
      <h3 style={{textAlign:"center",marginBottom:"5%"}}>Your-Favourites</h3>
    <div className="fav-container" >
      {/* Desktop Table View */}
      <div className="fav-table-container">
        <table className="fav-table">
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
            {data.map((val, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{val.title}</td>
                <td>{val.color}</td>
                <td>{val.brand}</td>
                <td><img src={val.image} alt={val.title} className="fav-image" /></td>
                <td><strong>${val.price}</strong></td>
                <td><button className="remove-button" onClick={() => removeHandle(index)}>Remove</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="fav-card-grid">
        {data.map((val, index) => (
          <div className="fav-card" key={index}>
            <img src={val.image} alt={val.title} className="fav-card-image" />
            <div className="fav-card-body">
              <h4>{val.title}</h4>
              <p><strong>Color:</strong> {val.color}</p>
              <p><strong>Brand:</strong> {val.brand}</p>
              <p><strong>Price:</strong> ${val.price}</p>
              <button className="remove-button" onClick={() => removeHandle(index)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Fav;
