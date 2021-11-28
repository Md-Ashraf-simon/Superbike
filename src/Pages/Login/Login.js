import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";
import { Alert, Button, Spinner } from "react-bootstrap";

function Login() {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
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
                  <h3 className="display-4">LOGIN!!</h3> <br />
                  <form>
                    <div className="form-group mb-3">
                      {" "}
                      <input
                        id="inputEmail"
                        type="email"
                        name="email"
                        onChange={handleOnChange}
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
                        onChange={handleOnChange}
                        type="password"
                        placeholder="Password"
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
                      Sign in
                    </button>
                    <NavLink to="/register">
                      <Button variant="text">New User? Please Register</Button>
                    </NavLink>
                    {isLoading && <Spinner animation="grow" />}
                    {user?.email && (
                      <Alert variant="success">Login successfully!</Alert>
                    )}
                    {authError && <Alert variant="danger">{authError}</Alert>}
                  </form>
                  <Button onClick={handleGoogleSignIn} variant="dark">
                    Google Sign In
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
