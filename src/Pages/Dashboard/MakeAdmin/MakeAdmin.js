import Alert from "@mui/material/Alert";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://frozen-taiga-35843.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <>
      {success && <Alert severity="success">Made Admin successfully!</Alert>}
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 col-md-5 col-sm-12 col-xs-12">
            <div class="card  px-2 py-3 p-md-4 card__extra">
              <h4 class="bold mb-3">Make an Admin</h4>
              <div class="d-flex p-1 m-1 row " id="div1">
                <div class="col-8 col-md-8 align-self-center p-0">
                  {" "}
                  <input
                    onBlur={handleOnBlur}
                    type="text"
                    class="inp ml-2 ml-md-4 w-100 border-0"
                    placeholder="Admin e-mail address "
                  />{" "}
                </div>
                <div class="col-4 col-md-4 p-0">
                  {" "}
                  <button
                    onClick={handleAdminSubmit}
                    class="btn admin_btn text-white w-100"
                  >
                    {" "}
                    Submit{" "}
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeAdmin;
