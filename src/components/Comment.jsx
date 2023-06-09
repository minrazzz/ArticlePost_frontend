import React from "react";

const Comment = ({ comments, user, createdAt }) => {
  return (
    <>
      <div className="list py-3 px-3  rounded-md bg-slate-50 dark:bg-[#121e3a] mb-4">
        <div className="flex justify-start items-center pb-3 ">
          <h1 className="text-md font-semibold dark:text-white">
            {user[0].name}
          </h1>
          <p className="text-md font-semibold mx-2 dark:text-white">-</p>
          <p className="text-xs font-semibold text-[#888888] italic dark:text-white">
            {createdAt}{" "}
          </p>
        </div>
        <div className="info">
          <p className="text-sm dark:text-white">{comments}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
