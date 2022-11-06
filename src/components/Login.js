import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",

    password: "",
  });

  const [login, setLogin] = useState("");
  const [loginorg, setLoginorg] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
    window.location.reload();
    axios
      .post("http://localhost:5000/api/auth/volunteer/login", state)
      .then((res) => {
        if (res.data.message) {
          setLogin(res.data.message);
          window.localStorage.setItem("token", res.data.token);
          window.localStorage.setItem("auth", "true");
          navigate("/dashboard");
        }

        console.log(res);
        // handle success
      })
      .catch((err) => {
        console.log(err);

        // handle error
      });
  };

  const handleSubmitorg = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/org/login", state)
      .then((res) => {
        if (res.data.message) {
          setLoginorg(res.data.message);
          window.localStorage.setItem("token", res.data.token);
          window.localStorage.setItem("auth", "true");
          navigate("/dashboard");
        }

        console.log(res);
        // handle success
      })
      .catch((err) => {
        console.log(err);

        // handle error
      });
  };

  //create a drop down with 2 options

  return (
    <div className=" flex  items-center justify-center ">
      <div className="">
        <form className="" onSubmit={handleSubmit}>
          <h5 className="">Sign in to our platform</h5>
          <div>
            <label className="">Your email</label>
            <input
              type="email"
              name="email"
              placeholder="First Name"
              value={state.username}
              onChange={handleChange}
              className=""
              required
            />
          </div>
          <div>
            <label for="password" className="">
              Your password
            </label>
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
          <div className="">
            <div className="">
              <div className="">
                <input id="remember" type="checkbox" value="" className="" />
              </div>
              <label for="remember" className="">
                Remember me
              </label>
            </div>
            <a href="#" className="">
              Lost Password?
            </a>
          </div>
          <button type="submit" className="">
            Login to your account
          </button>
          <div className="">
            Not registered?{" "}
            <a href="#" className="">
              Create account
            </a>
          </div>
        </form>
      </div>
      <div>
        <h1>{login}</h1>
      </div>

      <div className="">
        <form className="" onSubmit={handleSubmitorg}>
          <h5 className="">Sign in to our platform</h5>
          <div>
            <label className="">Your email</label>
            <input
              type="email"
              name="email"
              placeholder="First Name"
              value={state.username}
              onChange={handleChange}
              className=""
              required
            />
          </div>
          <div>
            <label for="password" className="">
              Your password
            </label>
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
          <div className="">
            <div className="">
              <div className="">
                <input id="remember" type="checkbox" value="" className="" />
              </div>
              <label for="remember" className="">
                Remember me
              </label>
            </div>
            <a href="#" className="">
              Lost Password?
            </a>
          </div>
          <button type="submit" className="">
            Login to your account
          </button>
          <div className="">
            Not registered?{" "}
            <a href="#" className="">
              Create account
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

export default Login;
