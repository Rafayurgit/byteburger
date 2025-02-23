import React, { useState, useEffect } from "react";
import axios from "axios";


export default function ReviewsPage() {
  const hardcodedReviews = [
    {
      id: "1",
      name: "Michael Scott",
      feedback: "The world's best burger joint! That's what she said!",
      image: "https://via.placeholder.com/150/0000FF",
    },
    {
      id: "2",
      name: "Pam Beesly",
      feedback: "I loved the fries! So crispy and flavorful.",
      image: "https://via.placeholder.com/150/FF5733",
    },
    {
      id: "3",
      name: "Jim Halpert",
      feedback: "Great service and even better food! Highly recommended.",
      image: "https://via.placeholder.com/150/28A745",
    },
  ];

  const [reviews, setReviews] = useState(hardcodedReviews);
  const [newReview, setNewReview] = useState({
    name: "",
    feedback: "",
    image: "",
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get("/api/reviews");
      if (Array.isArray(data)) {
        setReviews((prev) => [...prev, ...data]);
      } else {
        console.error("Unexpected data format:", data);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewReview((prev) => ({ ...prev, image: reader.result }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddReview = async (e) => {
    e.preventDefault();
    const newReviewWithId = { ...newReview, id: Date.now().toString() };
    try {
      setReviews((prev) => [...prev, newReviewWithId]);
      setNewReview({ name: "", feedback: "", image: "" });
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const handleDeleteReview = (id) => {
    setReviews((prev) => prev.filter((review) => review.id !== id));
  };

  return (
    <div className="reviews-page">
      <h1>Customer Reviews</h1>

      <form className=" review-form" onSubmit={handleAddReview}>
        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={newReview.name}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="feedback"
          placeholder="Feedback"
          value={newReview.feedback}
          onChange={handleInputChange}
          required
        />
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        <button type="submit" disabled={!newReview.name || !newReview.feedback || !newReview.image}>
          Add Review
        </button>
      </form>

      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img
              src={review.image || "https://via.placeholder.com/150"}
              alt={`${review.name}'s feedback`}
            />
            <h3>{review.name}</h3>
            <p>{review.feedback}</p>
            <button onClick={() => handleDeleteReview(review.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
