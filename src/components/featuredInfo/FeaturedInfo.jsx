import "./featuredInfo.css";
import { CalendarToday, LocationOn } from "@material-ui/icons";
import Foodcard from "../foodcard/foodcard";
import WidgetSm from "../widgetSm/WidgetSm";
import axios from "axios";
import Addrequest from "../Addrequest";
import { useEffect, useState } from "react";

export default function FeaturedInfo() {
  const token = window.localStorage.getItem("token");
  const [data, setData] = useState([]);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getPosts = async () => {
    axios
      .get("https://bon-appetit-server.alapanoski.repl.co/api/post", config)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
        // handle success
      })
      .catch((err) => {
        console.log(err);

        // handle error
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem1">
        <div className="searchBox">
          <input placeholder="Search"></input>
          <button>Search</button>
        </div>
        <div className="foodCardsection">
          {data.slice(0).reverse().map((item) => (
            <div>
              <div className="foodCard">
                <div className="foodCardTop">
                  <div className="foodCardTopLeft">
                    <img
                      src="https://avatars.githubusercontent.com/u/34004150?v=4"
                      alt=""
                      className="topAvatar"
                    />
                    <span className="foodCardSubTitle">{item.userId.name}</span>
                  </div>
                  <div className="foodCardTopRight">
                    <CalendarToday className="foodCardIcon" />
                    <span className="foodCardPercent">
                      {item.createdOn.slice(0, 10)}
                    </span>
                    <span className="foodCardPercent1">
                      {item.createdOn.slice(11, 16)}
                    </span>
                  </div>
                </div>
                <div className="foodCardBottom">
                  <div className="foodCardBottomLeft">
                    <img
                      src="https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      className="foodimage"
                    />
                  </div>
                  <div className="foodCardBottomRight">
                    <h2>{item.title}</h2>
                    <div className="foodInfo">
                      <div className="foodInfoTop">
                        <div className="foodInfoChild">
                          <span className="foodInfoKey">{item.isNonVeg} </span>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png"
                            alt=""
                            className="topAvatar1"
                          />
                        </div>
                        <span className="foodInfoValue">
                          Quantity : {item.numberOfServings}
                        </span>
                      </div>
                      <div className="foodInfoBottom">
                        <div className="foodInfoChild">
                          <LocationOn />
                          <span className="foodInfoKey">{item.city} </span>
                        </div>
                        <span className="foodInfoValue">
                          Expiry: {item.expiry.slice(0, 10)}
                        </span>
                      </div>

                      <div className="foodinfobottombutton">
                        <button className="foodinfobutton">Accept</button>
                        <button className="foodinfobutton">Deliver This</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="featuredItem2">
        <div className="widgetSm1">
          <Addrequest />
          <WidgetSm />
        </div>
      </div>
    </div>
  );
}
