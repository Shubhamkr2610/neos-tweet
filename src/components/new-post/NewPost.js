import React from "react";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import { Avatar } from "../avatar/Avatar";

export const NewPost = () => {
  return (
    <>
      <div className=" rounded  p-4 mx-24 h-min bg-white ">
        <div className="">
          <Avatar />
          <input type="text" placeholder="type your thought" className="outline-none p-1 w-full " />
        </div>

        <div className="flex">
          <div>
            <InsertPhotoOutlinedIcon sx={{ fontSize: 32 }} />
          </div>
          <div>
            <GifBoxOutlinedIcon sx={{ fontSize: 32 }} />
          </div>
          <div>
            <EmojiEmotionsOutlinedIcon sx={{ fontSize: 32 }} />
          </div>
          <button className="ml-auto" >Post</button>
        </div>
      </div>
    </>
  );
};
