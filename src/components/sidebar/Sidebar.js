import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col m-4 ml-8  gap-1">
        <NavLink to="/">
          <div className="hover:text-white  hover:bg-blue-600 rounded p-2 rounded">
            <HomeRoundedIcon sx={{ fontSize: 32 }} />
            <span className="ml-2">Home</span>
          </div>
        </NavLink>
        <NavLink to="/explore">
          <div className="hover:text-white  hover:bg-blue-600 rounded p-2 rounded">
            <ExploreIcon sx={{ fontSize: 32 }} />
            <span className="ml-2">Explore</span>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="hover:text-white  hover:bg-blue-600 rounded p-2 rounded">
            <BookmarkIcon sx={{ fontSize: 32 }} />
            <span className="ml-2">Bookmark</span>
          </div>
        </NavLink>
        <NavLink to="/profile">
          <div className="hover:text-white  hover:bg-blue-600 rounded p-2 rounded">
            <PersonIcon sx={{ fontSize: 32 }} />
            <span className="ml-2">Profile</span>
          </div>
        </NavLink>
      </div>
    </>
  );
};
