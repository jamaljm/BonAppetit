import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import  './addrequest.css' ;

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
      <form onSubmit={handleSubmit} className="container-input">
        <h1>Submit Request</h1>
        <input
          type="text"
          name="title"
          value={state.title}
          onChange={handleChange}
          placeholder="Enter title"
          style={{ width: "50%" }}
        />
        <input
          type="text"
          value={state.desc}
          onChange={handleChange}
          name="desc"
          placeholder="Enter your email"
          style={{ width: "50%" }}
        />
        <input
          type="text"
          name="numberOfServing"
          placeholder="Enter Quantity"
          value={state.numberOfServing}
          onChange={handleChange}
          style={{ width: "50%" }}
        />
        <input
          type="text"
          name="isNonVeg"
          value={state.isNonVeg}
          onChange={handleChange}
          placeholder="Enter Veg or Nonveg"
          style={{ width: "50%" }}
        />
        <input
          type="date"
          name="expiry"
          value={state.expiry}
          onChange={handleChange}
          placeholder="Enter expiry"
          style={{ width: "50%" }}
        />
        <input
          type="text"
          value={state.city}
          onChange={handleChange}
          name="city"
          placeholder="Enter your city"
          style={{ width: "50%" }}
        />
        <input
          type="text"
          value={state.state}
          onChange={handleChange}
          name="state"
          placeholder="Enter your state"
          style={{ width: "50%" }}
        />
        <input
          type="text"
          name="contactInfo"
          placeholder="Enter your Phone Number"
          value={state.contactInfo}
          onChange={handleChange}
          style={{ width: "50%" }}
        />
        <button type="submit">Submit</button>
        {login}
      </form>
    </div>
  );
};

export default Addrequest;
