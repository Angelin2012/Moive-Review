import React from 'react';
import './ReviewList.css';

const ReviewList = ({ reviews }) => {
  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <h3>{review.title}</h3>
          <p><strong>Rating:</strong> {review.rating}/5</p>
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
