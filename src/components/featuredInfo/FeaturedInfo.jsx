import "./featuredInfo.css";
import { CalendarToday } from "@material-ui/icons";


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
            </div>
          </div>
            <div className="foodCardBottom">
              <div className="foodCardBottomLeft">

                <img src="https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="foodimage" />
              </div>
              <div className="foodCardBottomRight">
                
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
