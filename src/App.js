import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GiveFeedback from './components/GiveFeedback';
import ViewReviews from './components/ViewReviews';
import './App.css';

function App() {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews((prev) => [...prev, review]);
  };

  return (
    <Router>
      <div className="nav">
        <Link to="/">Give Feedback</Link>
        <Link to="/reviews">View Reviews</Link>
      </div>
      <Routes>
        <Route path="/" element={<GiveFeedback addReview={addReview} />} />
        <Route path="/reviews" element={<ViewReviews reviews={reviews} />} />
      </Routes>
    </Router>
  );
}

export default App;
