import React from 'react';
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";


export const SidebarBottom = () => {
  return (
    <>
     <div className="flex justify-around items-center h-16 text-blue-600 bg-white 
     ">
        <NavLink to="/">
          <div className="flex flex-col ">
            <HomeRoundedIcon sx={{ fontSize: 32 }} />
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="flex flex-col">
            <ExploreIcon sx={{ fontSize: 32 }} />
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="flex flex-col">
            <BookmarkIcon sx={{ fontSize: 32 }} />
          </div>
        </NavLink>
        <NavLink to="/profile">
          <div className="flex flex-col">
            <PersonIcon sx={{ fontSize: 32 }} />
          </div>
        </NavLink>
      </div>
    </>
  )
}
