import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import useAuth from "../../../Hooks/useAuth";
import "./Header.css";

function Header() {
  const { user, logout } = useAuth();

  return (
    <>
      <Navbar
        style={{ backgroundColor: "#1ba370 " }}
        variant="light"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand className="nav__link brand__icon " as={Link} to="/home">
            <img
              src="https://demo.templatetrend.com/magento/MAG777/pub/static/version1630650548/frontend/Ortho/superbikebicycle/en_US/images/logo.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="nav__link" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav__link" as={Link} to="/shop">
              Shop
            </Nav.Link>

            <Nav.Link className="nav__link" as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>

            {user?.email ? (
              <Button onClick={logout} variant="dark">
                Logout
              </Button>
            ) : (
              <Nav.Link className="nav__link" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {user.email && (
              <Navbar.Text className="ms-2">
                Hello,{" "}
                <span className="font-weight-bold username">
                  {user?.displayName}
                </span>
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
