import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Posts, Sidebar, SidebarBottom, UserSuggestion } from "../../components";

export const BookMark = () => {
    const {bookmarks } = useSelector((state)=>state.bookmark)
  
  return (
    <>
      <div className="flex">
        <div className="hidden sm:block md:w-[25%] flex  ">
          <Sidebar />
        </div>
        <div className="w-full md:w-[90%] flex flex flex-col m-2 sm:m-4">
          <h1 className="text-xl mt-2 font-bold">
           Bookmarked Posts
          </h1>
           
          { bookmarks?.length>0? bookmarks?.map((item)=>((
                <Posts
                  key={item._id}
                  _id={item._id}
                  content={item.content}
                  username={item.username}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  userphoto={item.userphoto}
                />
              ))) : <h2>"no book mark"</h2> }
        </div>

        <div className="w-[28%] hidden lg:block flex  ">
          <UserSuggestion />
        </div>
      </div>
      <div className="fixed bottom-0  sm:hidden w-full">
        <SidebarBottom />
      </div>
    </>
  );
};
