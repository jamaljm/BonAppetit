import { useState } from "react";
import axios from "axios";
import "./landingpage.css";

export default function LandingPage() {
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();

  const submit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("description", description);

    const result = await axios.post(
      "http://localhost:8080/api/images",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    setImage(result.data.imagePath);
  };

  return (
    <div className="center-container">
      <section class="page_404">
        <div class="container1">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center color-black ">404</h1>
                </div>

                <div class="contant_box_404">
                  <h3 class="h2">Look like you're lost</h3>

                  <p>The page you are looking for not available!</p>

                  <a href="/" class="link_404">
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
