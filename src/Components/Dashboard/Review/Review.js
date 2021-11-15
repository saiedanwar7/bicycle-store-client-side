import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import "./Review.css";

const Review = () => {
  const { user } = useAuth();
  const [review, setReview] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRating = { ...review };
    newRating[field] = value;
    setReview(newRating);
    // console.log(review);
  };

  const handleReview = (e) => {
    e.preventDefault();
    const newReview = {
      ...review,
      userName: user.displayName,
      userEmail: user.email,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Your Review Successfully Submitted");
          e.target.reset();
        }
      });
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <div className="p-5 shadow-lg review-box">
        <h2 className="mb-4 fw-bold title-color">
          Review The Product By Rating
        </h2>

        <form onSubmit={handleReview}>
          <Form.Control
            onBlur={handleOnBlur}
            required
            className="mb-3"
            name="rating"
            size="lg"
            type="number"
            placeholder="Rating 1-5 star"
          />

          <Form.Control
            as="textarea"
            required
            onBlur={handleOnBlur}
            name="reviews"
            type="textarea"
            rows={3}
            placeholder="Your Review"
          />

          <button type="submit" className="btn btn-rate fw-bold w-100 mt-3">
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Review;
