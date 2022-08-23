import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Posts,
  Sidebar,
  SidebarBottom,
  UserSuggestion,
} from "../../components";
import { demouser } from "../../assets";
import { fetchPost } from "../../redux/slices/postSlice";

// import { useParams } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const { user , allUsers} = useSelector((state) => state.auth);
  // console.log(allUsers)
  const [profileUser , setProfileUser] = useState({});

  // let {profileId} = useParams();
  // console.log(profileId)

  var totalPostOfUser = posts?.filter((item) => item.username === user.username);

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  // useEffect(()=>{
  //   const profileUser = allUsers?.filter((user)=>user.username=== profileId)
  //   setProfileUser(profileUser)
  // }, [allUsers , profileId])

  console.log(profileUser)
  const logoutHandler = () => {
    dispatch(logout());
    toast.error("Logged out successfully");
    navigate("/");
  };
  return (
    <>
      <div>
        <div className="flex">
          <div className="hidden sm:block md:w-[25%] flex  ">
            <Sidebar />
          </div>
          <div className="flex flex-col w-full md:w-[90%]  m-2 sm:m-4 rounded ">
            <div className="flex flex flex-col p-4 bg-white">
              <div className="relative flex justify-center">
                <img
                  src={profileUser.coverphoto}
                  alt="user background image"
                  className="w-full h-[12rem]"
                />
                <div className="absolute bottom-0 -my-16">
                  <img
                    src={profileUser.userphoto ? user.userphoto : demouser}
                    alt=" user profile pic"
                    className="border-8 border-white h-32 w-32 rounded-full"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-1 mt-2 -mb-8">
                <button onClick={logoutHandler} className="flex items-center rounded border-2 border-blue-600 bg-blue-600 text-white px-4 py-2">
                Logout
                </button>
              </div>

              <div className="flex flex-col text-lg items-center mt-8">
                <p className="mt-2 font-bold text-2xl">
                  {`${profileUser.firstName} ${profileUser.lastName}`}
                </p>
                <p className="text-slate-600">{profileUser.username}</p>
                <p className="text-center ">{profileUser.bio}</p>
                <button 
                  className="rounded border-2 border-blue-600 bg-blue-600 text-white 
     mt-2 px-4 hover:opacity-75 disabled:cursor-not-allowed"
                >
                  Follow
                </button>
                {/* below code is for future use  */}
                {/* <button
                  className="rounded border-2 border-blue-600 bg-blue-600 text-white 
     mt-2 px-4 hover:opacity-75 disabled:cursor-not-allowed"
                >
                  Unfollow
                </button> */}

                <div className="w-[90%] rounded h-20 mt-4 flex justify-around bg-slate-100 items-center">
                  <div className="flex flex-col items-center">
                    <p className="font-bold">0</p>
                    <p>Following</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-bold">{totalPostOfUser?.length}</p>
                    <p>posts</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <p className="font-bold">0</p>
                    <p>Followers</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xl mt-2 font-bold">User posts</p>
            {posts?.filter((item) => item.username === user.username)
              .map((item) => (
                <Posts
                  key={item._id}
                  _id={item._id}
                  content={item.content}
                  username={item.username}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  userphoto={item.userphoto}
                />
              )).reverse()}
          </div>
          <div className="w-[28%] hidden lg:block flex">
            <UserSuggestion />
          </div>
          <div className="fixed bottom-0  sm:hidden w-full">
            <SidebarBottom />
          </div>
        </div>
      </div>
    </>
  );
};
