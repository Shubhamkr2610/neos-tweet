import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import { Avatar } from "../avatar/Avatar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../redux/slices/postSlice";

export const Posts = ({
  content = "",
  comments = [],
  username = "",
  firstName = "",
  lastName = "",
  userphoto = "",
  _id,
}) => {
  const [menuOn, setMenuOn] = useState(false);
  const {encodedToken, user} = useSelector(state=> state.auth)
  const {posts} = useSelector(state=> state.post)
  const dispatch= useDispatch()


  const portalHandler = () => {
    setMenuOn(!menuOn);
  };
  const deletePostHandler = ()=>{
    dispatch(deletePost({token:encodedToken, postId: _id}))
  }

  return (
    <>
      <div className="relative my-4 bg-white p-4 rounded w-full">
        <div className="flex">
          <Avatar img={userphoto} />

          <div className="flex flex-col ml-4 w-full">
            <Link to="">
              <div className="flex gap-2">
                <p className="font-semibold">{`${firstName} ${lastName}`}</p>
                <p className="text-slate-600">{username}</p>
              </div>
            </Link>

            <div className="mt-2 max-w-full">{content}</div>

            <div className="w-full flex justify-around mt-3 text-slate-600">
              <button>
                <FavoriteBorderOutlinedIcon />
              </button>
              <button>
                <BookmarkBorderOutlinedIcon />
              </button>
              <button>
                <ModeCommentOutlinedIcon />
              </button>
              <button>
                <EditOutlinedIcon />
              </button>
              {menuOn ? (
                <button onClick={portalHandler}>
                  <CloseOutlinedIcon />
                </button>
              ) : (
                <button onClick={portalHandler}>
                  <MoreVertOutlinedIcon />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ===============
        modal for delete the post
        =============== */}
        <div
          style={{ display: menuOn ? "block" : "none" }}
          className="absolute right-12 bottom-12 bg-blue-200 flex flex-col p-2 rounded"
        >
          <button className="flex p-2 rounded hover:bg-white" onClick={deletePostHandler}>
            <DeleteOutlinedIcon />
            <span className="ml-1">Delete</span>
          </button>
          <button className="flex p-2 rounded text-red-500 hover:bg-white">
            <FlagOutlinedIcon />
            <span className="ml-1">Report</span>
          </button>
        </div>
         {/* ===============
        modal for delete the post
        =============== */}
      </div>
    </>
  );
};
