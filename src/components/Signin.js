import React, { useState } from "react"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"
import "./signin.css"

function SignupPage() {
  const navigate = useNavigate()
  const [state, setState] = useState({
    name: "",
    email: "",

    password: "",
  })

  const [login, setLogin] = useState("")
  const [token, setToken] = useState("")
  const [loginorg, setLoginorg] = useState("")
  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit1 = (e) => {
    e.preventDefault()
    axios
      .post(
        "https://bon-appetit-server.alapanoski.repl.co//api/auth/volunteer/signup",
        state
      )
      .then((res) => {
        if (res.data.message) {
          setToken(res.data.token);
          console.log(res.data.token);
          window.localStorage.setItem("token", res.data.token);
          window.localStorage.setItem("auth", "true");

          navigate("/");
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
  }

  const handleSubmitorg = (e) => {
    e.preventDefault()
    axios
      .post(
        "https://bon-appetit-server.alapanoski.repl.co/api/auth/volunteer/signup",
        state
      )
      .then((res) => {
        if (res.data.message) {
          window.localStorage.setItem("token", res.data.token);
          window.localStorage.setItem("auth", "true");
          navigate("/home");
          setLoginorg(res.data.message);
          window.location.reload();
        }

        console.log(res);
        // handle success
      })
      .catch((err) => {
        console.log(err);

        // handle error
      });
  }

  //create a drop down with 2 options

  return (
    <div className="signupcontainer">
      <div className="signupcard">
        <form className="signupform" onSubmit={handleSubmit1}>
          <h5 className="signupheading">Sign up for Volunteers</h5>
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
            <a href="#" className="">
              Login
            </a>
          </div>
          <div>
            <h1>{login}</h1>
          </div>
        </form>
      </div>

      <div className="signupcard">
        <form className="signupform" onSubmit={handleSubmitorg}>
          <h5 className="signupheading">Sign Up For Organizations</h5>
          <div className="asdf">
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
          <div className="">
            Already have account?{" "}
            <a href="#" className="">
              Login
            </a>
          </div>
        </form>
      </div>
      <div>
        <h1>{loginorg}</h1>
      </div>
    </div>
  );
}

export default SignupPage
