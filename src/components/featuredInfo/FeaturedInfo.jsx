import "./featuredInfo.css";
import { CalendarToday,LocationOn  } from "@material-ui/icons";


export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem1">
        <div className="searchBox">
          <input placeholder="Search"></input>
          <button>Search</button>
        </div>
        <div className="foodCardsection">

          <div className="foodCard">
          <div className="foodCardTop">
            <div className="foodCardTopLeft">
          <img src="https://avatars.githubusercontent.com/u/34004150?v=4" alt="" className="topAvatar" />
              <span className="foodCardSubTitle">Jamal P</span>
            </div>
            <div className="foodCardTopRight">
              <CalendarToday className="foodCardIcon" />
                <span className="foodCardPercent">20-09-2022</span>
                <span className="foodCardPercent1">10:23 PM</span>
                
            </div>
          </div>
            <div className="foodCardBottom">
              <div className="foodCardBottomLeft">

                <img src="https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="foodimage" />
              </div>
              <div className="foodCardBottomRight">
                <h2>Biriyani With Chicken fry</h2>
                <div className="foodInfo">
                  <div className="foodInfoTop">
                    <div className="foodInfoChild">
                    <span className="foodInfoKey">Food Type:   </span>
                             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png" alt="" className="topAvatar1" />
                    </div>
                      <span className="foodInfoValue">Quantiy : 10KG</span>
                  </div>
                  <div className="foodInfoBottom">
                    <div className="foodInfoChild">
                      <LocationOn />
                    <span className="foodInfoKey">Edappally   </span>
                    </div>
                      <span className="foodInfoValue">Quantiy : 10KG</span>
                  </div>
                </div>
              </div>


          </div>
          </div>


          </div>
        
      </div>
      <div className="featuredItem2">
   
        </div>

              
        
 
  
    </div>
  );
}
