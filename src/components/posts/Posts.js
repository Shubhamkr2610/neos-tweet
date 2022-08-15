import React, { useEffect } from "react";
import {
  FavoriteBorderOutlinedIcon,
  FavoriteIcon,
  BookmarkBorderOutlinedIcon,
  EditOutlinedIcon,
  ModeCommentOutlinedIcon,
  DeleteOutlinedIcon,
  MoreVertOutlinedIcon,
  CloseOutlinedIcon,
  FlagOutlinedIcon,
  SendIcon,
} from "../../icons/Icons";
import { Avatar } from "../avatar/Avatar";
import { SmallAvatar } from "../avatar/SmallAvatar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./posts.css";
import {
  deletePost,
  dislikePost,
  likePost,
} from "../../redux/slices/postSlice";
import { EditModal } from "../modal/EditModal";
import { Comment } from "../comment/Comment";
import { getCommentOnPost, postComment } from "../../redux/slices/commentSlice";

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
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [editmodal, setEditModal] = useState(false);
  const [displayComment, setDisplayComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const { encodedToken, user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.post);
  const { commentList } = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  const portalHandler = () => {
    setMenuOn(!menuOn);
  };
  const deletePostHandler = () => {
    dispatch(deletePost({ token: encodedToken, postId: _id }));
  };
  const likePostHandler = () => {
    setIsPostLiked(!isPostLiked);
    dispatch(likePost({ postId: _id, token: encodedToken }));
  };
  const disLikePostHandler = () => {
    dispatch(dislikePost({ postId: _id, token: encodedToken }));
    setIsPostLiked(!isPostLiked);
  };

  const getCommentHandler = () => {
    dispatch(getCommentOnPost({ token: encodedToken, postId: _id }));
    setDisplayComment(!displayComment);
  };

  const postCommentHandler = () => {
    dispatch(
      postComment({ text: commentText, token: encodedToken, postId: _id })
    );
    setCommentText("");
  };
  useEffect(() => {
    const post = posts.find((post) => post._id === _id);
    const liked = post?.likes.likedBy.some((item) => item.id === user.id);
    setIsPostLiked(liked);
  }, [posts]);

  useEffect(() => {
    window.onclick = (e) => {
      if (e.target.className === "modal-wrapper") {
        setEditModal(false);
      }
    };
  });

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
              {isPostLiked ? (
                <button onClick={disLikePostHandler}>
                  <FavoriteIcon className="text-red-500" />
                </button>
              ) : (
                <button onClick={likePostHandler}>
                  <FavoriteBorderOutlinedIcon />
                </button>
              )}

              <button>
                <BookmarkBorderOutlinedIcon />
              </button>
              <button onClick={getCommentHandler}>
                <ModeCommentOutlinedIcon />
              </button>
              <button onClick={() => setEditModal(!editmodal)}>
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
          <button
            className="flex p-2 rounded hover:bg-white"
            onClick={deletePostHandler}
          >
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

        {/* ===============
        comment input section 
        =============== */}
        <div
          className="w-full"
          style={{ display: displayComment ? "block" : "none" }}
        >
          <div className="flex py-4 rounded w-full">
            <SmallAvatar img={user.userphoto} />
            <input
              className="border-2 outline-none pl-2 pr-12 ml-8 w-[100%]"
              onInput={(e) => setCommentText(e.target.value)}
            />
            <button
              className=" relative right-10 text-blue-600 disabled:text-slate-700"
              onClick={postCommentHandler}
              disabled={commentText.length === 0}
            >
              <SendIcon />
            </button>
          </div>
          <div>
            {commentList?.map((item) => (
              <Comment
                key={item._id}
                _id={item._id}
                firstName={item.firstName}
                lastName={item.lastName}
                text={item.text}
                userphoto={item.userphoto}
                username={item.username}
              />
            ))}
          </div>
        </div>

        {/* ===============
        comment input section
        =============== */}

        {/* ===============
        modal for edit the post
        =============== */}

        <div
          className="edit-modal"
          style={{ display: editmodal ? "flex" : "none " }}
        >
          <div className="modal-wrapper">
            <EditModal
              editmodal={editmodal}
              setEditModal={setEditModal}
              _id={_id}
              postText={content}
            />
          </div>
        </div>
        {/* ===============
        modal for edit the post
        =============== */}
      </div>
    </>
  );
};
