import React from "react";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:8000/";

const truncateText = (text, length) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + ".....";
};

function Articles({ id, title, introduction, author, image, createdAt }) {
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
          <h1 className="font-bold text-xl uppercase dark:text-white pl-1">
            {truncateText(title, 80)}
          </h1>
        </div>

        <div className="date py-1">
          <span className="dark:text-slate-500"> posted:</span>
          <span className="italic text-slate-500 pl-2">{createdAt}</span>
        </div>
        <div className="info">
          <p className="dark:text-[#ffffff] text-clip">
            {truncateText(introduction, 280)}
          </p>
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
