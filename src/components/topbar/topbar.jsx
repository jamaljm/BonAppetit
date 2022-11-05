import React from "react";
import "./topbar.css";
import { NotificationsNone, SettingsApplications} from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Ecommerce</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone className="topbar-icon"/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsApplications className="topbar-icon"/>
          </div>
          <img src="https://avatars.githubusercontent.com/u/34004150?v=4" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}