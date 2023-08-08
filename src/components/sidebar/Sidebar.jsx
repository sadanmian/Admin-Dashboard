import React from "react";
import "./sidebar.css";
import {
  AttachMoney,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              <span className="sidebarIconText">Home</span>
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              <span className="sidebarIconText">Analytics</span>
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              <span className="sidebarIconText">Sales</span>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to={"/users"} className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                <span className="sidebarIconText">Users</span>
              </li>
            </Link>
            <Link to={"/products"} className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                <span className="sidebarIconText">Products</span>
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              <span className="sidebarIconText">Transactions</span>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              <span className="sidebarIconText">Mail</span>
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              <span className="sidebarIconText">Feedback</span>
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              <span className="sidebarIconText">Messages</span>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              <span className="sidebarIconText">Manage</span>
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              <span className="sidebarIconText">Analytics</span>
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              <span className="sidebarIconText">Reports</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
