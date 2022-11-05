import "./featuredInfo.css";
import { CalendarTodayIcon } from "@material-ui/icons";

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
              <CalendarTodayIcon className="foodCardIcon" />
              <span className="foodCardPercent">+10%</span>
            </div>
          </div>
          <div className="foodCardBottom">
            <span className="foodCardSubTitle">Food</span>
          </div>
          </div>


          </div>
        
      </div>
      <div className="featuredItem2">
   
        </div>

              
        
 
  
    </div>
  );
}
