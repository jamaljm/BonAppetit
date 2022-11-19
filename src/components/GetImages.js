import axios from "axios";
import React, { useEffect, useState } from "react";

const GetImages = () => {
  const token = window.localStorage.getItem("token");
  const [data, setData] = useState([]);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getimages = async () => {
    await axios
      .get("http://localhost:5000/api/post/image", config)
      .then((res) => {
        console.log(res.data);
        setData(res.data.imageUrls);
        // handle success
      })
      .catch((err) => {
        console.log(err);

        // handle error
      });
  };
  useEffect(() => {
    getimages();
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <img src={item} alt="image" />
          </div>
        );
      })}
    </div>
  );
};

export default GetImages;
