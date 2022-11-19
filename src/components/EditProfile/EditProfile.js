import React, { useState } from 'react'
import './EditProfile.css'
import axios from 'axios';


export const EditProfile = () => {
  const [file, setFile] = useState();
  const [caption, setCaption] = useState("");
//   const token = window.localStorage.getItem("token");
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "multipart/form-data",
//     },
//   };
// //image upload function with axios and aws s3
//    const submit = async (event) => {
//      event.preventDefault();

//      const formData = new FormData();
//      formData.append("image", file);
//      formData.append("caption", caption);
//      await axios.put(
//        `https://bon-appetit-server.alapanoski.repl.co/api/post/image/${id}`,
//        formData,config
     
//      );
//    };

  return (
    <div className=" marginright">
      <div className="profile-card">
        <div className="profile-card__img">
          {/* <form onSubmit={submit}>
            <input
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              accept="image/*"
            ></input>
            <input
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              type="text"
              placeholder="Caption"
            ></input>
            <button type="submit">Submit</button>
          </form> */}
        </div>
        <div className="my-profile">
          <h1>My Profile</h1>
        </div>
        <div className="profile-card__cnt">
          <div className="profile-card__name">John Doe</div>
          <div className="profile-card__txt">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
            quae.
          </div>
          <div className="profile-card-loc">
            <span className="profile-card-loc__icon">
              <i className="fa fa-map-marker"></i>
            </span>
            <span className="profile-card-loc__txt">New York, USA</span>
            <button className="profile-card__button">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
