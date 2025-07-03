import React from 'react';
import ReviewList from '../components/ReviewList';
import './ViewReviews.css';

const ViewReviews = ({ reviews }) => {
  return (
    <div className="reviews-page">
      <h2>All Movie Reviews</h2>
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default ViewReviews;
