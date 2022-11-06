import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
      .post("http://localhost:5000/api/post",  state,config)
      .then((res) => {
        if (res.data.message) {
          console.log(res.data.message);

          navigate("/volunteer");
          setLogin(res.data.message);
        }

        console.log(res);
        // handle success
      })
      .catch((err) => {
        console.log(err);

        // handle error
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={state.title}
          onChange={handleChange}
          placeholder="Enter title"
        />
        <input
          type="text"
          value={state.desc}
          onChange={handleChange}
          name="desc"
          placeholder="Enter your email"
        />
        <input
          type="text"
          name="numberOfServing"
          placeholder="Enter Quantity"
          value={state.numberOfServing}
          onChange={handleChange}
        />
        <input
          type="text"
          name="isNonVeg"
          value={state.isNonVeg}
          onChange={handleChange}
          placeholder="Enter Veg or Nonveg"
        />
    
        <input
          type="text"
          value={state.city}
          onChange={handleChange}
          name="city"
          placeholder="Enter your city"
        />
        <input
          type="text"
          value={state.state}
          onChange={handleChange}
          name="state"
          placeholder="Enter your state"
        />
        <input
          type="text"
          name="contactInfo"
          placeholder="Enter your Phone Number"
          value={state.contactInfo}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        {login}
      </form>
    </div>
  );
};

export default Addrequest;
