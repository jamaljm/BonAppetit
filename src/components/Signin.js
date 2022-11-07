import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./signin.css";

function SignupPage() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",

    password: "",
  });

  const [type, setType] = useState("volunteer");
  const [login, setLogin] = useState("");
  const [token, setToken] = useState("");
  const [loginorg, setLoginorg] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    console.log(type, state);
    axios
      .post(
        "https://bon-appetit-server.alapanoski.repl.co/api/auth/" +
          type +
          "/signup",
        state
      )
      .then((res) => {
        if (res.data.message) {
          setToken(res.data.token);
          console.log(res.data.token);
          window.localStorage.setItem("token", res.data.token);
          window.localStorage.setItem("auth", "true");

          navigate("/home");
          setLogin(res.data.message);
          window.location.reload();
        }

        console.log(res);
        // handle success
      })
      .catch((err) => {
        console.log(err);

        // handle error
      });
  };

 

  const handleType = (e) => {
    setType(e.target.value);
  };
  //create a drop down with 2 options

  return (
    <div className="signupcontainer">
      <div className="signupcard">
        <form className="signupform" onSubmit={handleSubmit1}>
          <h5 className="signupheading">Sign up </h5>
          <div className="asdf">
            <label className=""></label>
            <input
              type="name"
              name="name"
              placeholder="John Doe"
              value={state.name}
              onChange={handleChange}
              className=""
              required
            />
            <input
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              value={state.username}
              onChange={handleChange}
              className=""
              required
            />
            <label for="dog-names">I am a </label>
            <select name="type" id="dog-names" onChange={handleType}>
              <option value="volunteer">Volunteer</option>
              <option value="org">Organization</option>
            </select>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              className=""
              required
            />
          </div>

          <button type="submit" className="">
            Signup
          </button>
          <div className="alreadyaccou">
            Already have account?{" "}
            <Link to="/login"   className="">
              Login
            </Link>
          </div>
          <div>
            <h1>{login}</h1>
          </div>
        </form>
      </div>

      <div>
        <h1>{loginorg}</h1>
      </div>
    </div>
  );
}

export default SignupPage;
