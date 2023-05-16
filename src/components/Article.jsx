import React from "react";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:8000/";

function Articles({ id, title, description, author, image, createdAt }) {
  return (
    <div className="post-wrapper grid grid-cols-2  min-h-full ">
      <div className="left-box image pr-2 py-2">
        <img
          src={`${BASE_URL}${image}`}
          className="h-[270px] w-full object-cover"
          alt="article"
        />
      </div>
      <div className="right-box pl-2 py-2 ">
        <div className="tittle grid grid place-items-center bg-yellow-300 rounded-md dark:bg-slate-500">
          <h1 className="font-bold text-xl uppercase dark:text-white px-auto">
            {title}
          </h1>
        </div>

        <div className="date py-1">
          posted:<span className="italic text-slate-500 pl-2">{createdAt}</span>
        </div>
        <div className="info">
          <p className="dark:text-[#ffffff] text-clip">{description}</p>
        </div>
        <div className="author flex justify-between pt-1">
          <p className="text-[#2988b9] font-semibold">
            Author:<span>{author}</span>
          </p>
          <Link
            to={`/article/${id}`}
            className="text-[#e67e22] font-semibold underline"
          >
            see more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Articles;
