import "./sidebar.css";
import {
  Widgets,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
           <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <Widgets className="sidebarIcon active" />
              Home
            </li>
            </Link>
            <Link to="/products" className="link">
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              
            </li>
            </Link>
              {/* <Link to="" className="link"> */}
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                
              </li>
            {/* </Link> */}
            {/* <Link to="" className="link"> */}
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                
              </li>
            {/* </Link> */}
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              
            </li>
          </ul>
        </div>
    
      </div>
    </div>
  );
}
