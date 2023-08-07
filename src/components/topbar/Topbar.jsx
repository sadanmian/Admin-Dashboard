import React from "react";
import "./topbar.css";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">JollyRoger</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone /> <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language /> <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://pbs.twimg.com/profile_images/1283759937177317376/iKqA9lOB_400x400.jpg"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
