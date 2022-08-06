import React, { useRef, useState } from "react";
import { NewPost, Sidebar, UserSuggestion } from "../../components";

export const FeedPage = () => {
  return (
    <>
    <div className=" flex ">
      <div className=" flex w-1/5  ">
      <Sidebar/>
      </div>
      <div className=" flex w-3/5  flex flex-col">
      <NewPost />
      </div>
      <div className=" flex w-1/5 ">
        <UserSuggestion/>
      </div>
    </div>
    </>
  );
};
