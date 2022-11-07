import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./addrequest.css";

const Addrequest = () => {
  const navigate = useNavigate();

  const token = window.localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [login, setLogin] = useState("");
  const [state, setState] = useState({
    title: "",
    desc: "",
    numberOfServing: "",
    isNonVeg: "",
    expiry: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://bon-appetit-server.alapanoski.repl.co/api/post",
        state,
        config
      )
      .then((res) => {
        if (res.data.message) {
          console.log(res.data.message);

          navigate("/volunteer");
          setLogin(res.data.message);
        }

        console.log(res);
        navigate("/");
        // handle success
      })
      .catch((err) => {
        console.log(err);

        // handle error
      });
  };

  return (
    <div className="container-input">
      <div className="inner-container">
        <h1 onClick={() => setIsActive(!isActive)}>
          Add Request{"\t"}
          {isActive ? "X" : "+"}
        </h1>
      </div>

      {isActive && (
        <div>
          <form className="accordion-content" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={state.title}
              onChange={handleChange}
              placeholder="Enter title"
              required
            />
            <input
              type="text"
              value={state.desc}
              onChange={handleChange}
              name="desc"
              placeholder="Enter your email"
              required
            />
            <input
              type="text"
              name="numberOfServing"
              placeholder="Enter Quantity"
              value={state.numberOfServing}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="isNonVeg"
              value={state.isNonVeg}
              onChange={handleChange}
              placeholder="Enter Veg or Nonveg"
              required
            />
            <input
              type="date"
              name="expiry"
              value={state.expiry}
              onChange={handleChange}
              placeholder="Enter expiry"
              required
            />
            <input
              type="text"
              value={state.city}
              onChange={handleChange}
              name="city"
              placeholder="Enter your city"
              required
            />
            <input
              type="text"
              value={state.state}
              onChange={handleChange}
              name="state"
              placeholder="Enter your state"
              required
            />
            <input
              type="text"
              name="contactInfo"
              placeholder="Enter your Phone Number"
              value={state.contactInfo}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
            {login}
          </form>
        </div>
      )}
    </div>
  );
};

export default Addrequest;
