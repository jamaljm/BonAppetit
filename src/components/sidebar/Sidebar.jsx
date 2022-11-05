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
              Products
            </li>
            </Link>
              {/* <Link to="" className="link"> */}
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            {/* </Link> */}
            {/* <Link to="" className="link"> */}
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            {/* </Link> */}
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
    
      </div>
    </div>
  );
}
