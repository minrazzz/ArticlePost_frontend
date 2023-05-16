import React from "react";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:8000/";

function Articles({ title, description, author, image, createdAt }) {
  return (
    <div className="post-wrapper grid grid-cols-2  min-h-full ">
      <div className="left-box image pr-2 py-2">
        <img
          src={`${BASE_URL}${image}`}
          className="h-[270px] w-full object-cover"
          alt="article"
        />
      </div>
      <div className="right-box pl-2 py-2">
        <div className="tittle">
          <h1 className="font-bold text-xl">{title}</h1>
        </div>

        <div className="date py-1">
          posted:<span className="italic text-slate-500 pl-2">{createdAt}</span>
        </div>
        <div className="info">
          <p className="dark:text-[#ffffff]">{description}</p>
        </div>
        <div className="author flex justify-between pt-1">
          <p className="text-[#2988b9] font-semibold">
            Author:<span>{author}</span>
          </p>
          <Link to="#" className="text-[#e67e22] font-semibold underline">
            see more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Articles;
