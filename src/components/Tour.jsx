import React from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">$ {price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {info}
          <button className="info-btn"></button>
        </p>
        <button
          className="delete-btn btn-block btn"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
