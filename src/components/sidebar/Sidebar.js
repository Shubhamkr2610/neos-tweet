import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <div className="">
        <NavLink to="/">
          <div className="">
            <HomeRoundedIcon sx={{ fontSize: 40 }} />
            <span className="">Home</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="">
            <ExploreIcon sx={{ fontSize: 40 }} />
            <span className="">Explore</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="">
            <BookmarkIcon sx={{ fontSize: 40 }} />
            <span className="">Bookmark</span>
          </div>
        </NavLink>
        <NavLink to="/profile">
          <div className="">
            <PersonIcon sx={{ fontSize: 40 }} />
            <span className="">Profile</span>
          </div>
        </NavLink>
      </div>
    </>
  );
};
