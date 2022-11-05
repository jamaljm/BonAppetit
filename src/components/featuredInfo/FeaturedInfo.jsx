import "./featuredInfo.css";
import { CalendarToday, LocationOn } from "@material-ui/icons";
import Foodcard from '../foodcard/foodcard';
 


export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem1">
        <div className="searchBox">
          <input placeholder="Search"></input>
          <button>Search</button>
        </div>
        <div className="foodCardsection">

         < Foodcard />
         < Foodcard />
          < Foodcard />
           < Foodcard />
         < Foodcard />
         < Foodcard />

          </div>
        
      </div>
      <div className="featuredItem2">
   
        </div>

              
        
 
  
    </div>
  );
}
