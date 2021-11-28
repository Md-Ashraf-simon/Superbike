import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.svg";

import "./Footer.css";

function Footer() {
  return (
    <Container className="footer__area">
      <Row className="g-4 mt-5 mb-5">
        <Col sm={12} md={4} className="footer__intro">
          <img
            className="brand__logo"
            src="https://demo.templatetrend.com/magento/MAG777/pub/static/version1630650548/frontend/Ortho/superbikebicycle/en_US/images/logo.png"
            alt=""
          />
          <p>
            Aenean sollicitudin here yhlorem quis aucto nisi elit lorem nec
            demi. Aenean scitudin here lorem quis aucto nisi elit lorem nec
            .Aenean scitudin here yhlorem quis aucto.
          </p>
        </Col>
        <Col sm={12} md={4}>
          <h3>Usefull Links</h3>
          <Nav.Link className="nav__link footer__link" as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link className="nav__link footer__link" as={Link} to="/products">
            Products
          </Nav.Link>
          <Nav.Link
            className="nav__link footer__link"
            as={Link}
            to="/dashboard"
          >
            Dashboard
          </Nav.Link>
        </Col>
        <Col md={4} className="footer__subscribe">
          <h3 className="ps-3">SIGN UP</h3>
          <p className="ps-3">
            Receive our latest updates about <br />
            our news and blogs.
          </p>
          <div className="input-group mb-3 mt-3 ps-3">
            <input className="input__email" type="text" />
            <button className="btn button" type="button">
              Submit
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
