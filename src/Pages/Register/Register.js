import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Alert, Button, Spinner } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

function Register() {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image"></div>
        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-xl-6 mx-auto">
                  <h3 className="display-4">REGISTER!!</h3> <br />
                  {!isLoading && (
                    <form onSubmit={handleLoginSubmit}>
                      <div className="form-group mb-3">
                        {" "}
                        <input
                          id="inputEmail"
                          type="email"
                          name="name"
                          onBlur={handleOnBlur}
                          placeholder="Name"
                          required=""
                          autofocus=""
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                        />{" "}
                      </div>
                      <div className="form-group mb-3">
                        {" "}
                        <input
                          id="inputEmail"
                          type="email"
                          name="email"
                          onBlur={handleOnBlur}
                          placeholder="Email address"
                          required=""
                          autofocus=""
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                        />{" "}
                      </div>
                      <div className="form-group mb-3">
                        {" "}
                        <input
                          id="inputPassword"
                          name="password"
                          onBlur={handleOnBlur}
                          type="password"
                          placeholder="Password"
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-danger"
                        />
                        <br />{" "}
                      </div>
                      <div className="form-group mb-3">
                        {" "}
                        <input
                          id="inputPassword"
                          name="password2"
                          onBlur={handleOnBlur}
                          type="password"
                          placeholder="Retype your Password"
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-danger"
                        />
                        <br />{" "}
                      </div>

                      <button
                        onClick={handleLoginSubmit}
                        type="submit"
                        className="btn submit__btn btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                      >
                        Register
                      </button>
                      <NavLink to="/login">
                        <Button variant="text">User? Please Login</Button>
                      </NavLink>
                      {isLoading && <Spinner animation="grow" />}
                      {user?.email && (
                        <Alert variant="success">
                          User Created successfully!
                        </Alert>
                      )}
                      {authError && <Alert variant="danger">{authError}</Alert>}
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
