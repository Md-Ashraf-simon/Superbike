import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import "./AddReview.css";

const AddReview = () => {
  const history = useHistory();

  const [alert, setAlert] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("https://frozen-taiga-35843.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          reset();
          setAlert(true);
          setTimeout(() => {
            history.push("/");
          }, 1000);
        }
      });
  };

  return (
    <>
      {alert ? (
        <Container className="mx-auto w-50">
          <Alert variant="success">Order Succesfully!</Alert>
        </Container>
      ) : (
        <div className="add-service">
          <h2 className="fs-1 p-5 text-center">Please submit a Review</h2>
          <form className="mx-auto w-100" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="mb-3"
              {...register("name", { required: true, maxLength: 20 })}
              placeholder="Name"
            />
            <br />
            <input
              className="mb-3"
              {...register("profession")}
              placeholder="Profession"
            />
            <br />
            <input
              className="mb-3"
              type="number"
              {...register("rating")}
              placeholder="Rating"
            />
            <br />
            <input
              className="mb-3"
              type="url"
              {...register("image")}
              placeholder="Profile Image URL"
            />
            <br />
            <textarea
              className="mb-3"
              {...register("review")}
              placeholder="Write a Review"
            />

            <br />
            <input type="submit" />
          </form>
        </div>
      )}
    </>
  );
};

export default AddReview;
