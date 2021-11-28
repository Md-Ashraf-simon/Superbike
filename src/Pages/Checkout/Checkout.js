import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useForm } from "react-hook-form";
import { Card, Col, Alert, Container } from "react-bootstrap";
import "./Checkout.css";
import useAuth from "../../Hooks/useAuth";
import Rating from "react-rating";

function Checkout() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const history = useHistory();
  const [alert, setAlert] = useState(false);
  const { user } = useAuth();
  const { id } = useParams();

  const [service, setService] = useState({});

  useEffect(() => {
    const url = `https://frozen-taiga-35843.herokuapp.com/product/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  const onSubmit = (data) => {
    data.id = service._id;
    data.title = service.name;
    data.price = service.price;
    data.status = "Pending";

    fetch("https://frozen-taiga-35843.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          setAlert(true);
          setTimeout(() => {
            history.push("/");
          }, 1000);
        }
      });
  };

  return (
    <div className="mx-auto">
      {alert ? (
        <Container>
          <Alert variant="success">Order Succesfully!</Alert>
        </Container>
      ) : (
        <>
          <h1 className="text-center fs-1 p-3">Puchase Package</h1>
          <div className="container checkout__area mx-auto d-flex">
            <Col xs={12} sm={6} md={6}>
              <Card className="services__card w-100 mx-auto">
                <div className="ml-3 p-3 image__area">
                  <img width="100%" src={service.image} alt="" />
                </div>
                <h2 className="ms-2 text-dark">{service.name}</h2>
                <Rating
                  className="ms-2"
                  initialRating={service?.rating}
                  emptySymbol="far fa-star icon-color"
                  fullSymbol="fas fa-star icon-color"
                  readonly
                ></Rating>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <Card.Body className="ms-5">
                <Card.Text className="mt-3">{service.name}</Card.Text>
                <Card.Text className="mt-3 color__primary">
                  ${service.price}
                </Card.Text>
                <Card.Title className="my-3">Shipping Info</Card.Title>
                <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
                  <input
                    defaultValue={user?.displayName}
                    {...register("name")}
                  />
                  <br />
                  <input
                    className="mt-3"
                    defaultValue={user?.email}
                    {...register("email")}
                  />
                  <br />
                  <input
                    className="mt-3"
                    defaultValue="Address"
                    {...register("address", { required: true })}
                  />

                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <br />
                  <input className="submit__btn mt-3" type="submit" />
                </form>
              </Card.Body>
            </Col>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
