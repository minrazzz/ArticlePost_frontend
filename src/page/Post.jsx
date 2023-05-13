import React from "react";
import { Link } from "react-router-dom";

function Post() {
  return (
    <div className="post-wrapper grid grid-cols-2  min-h-full ">
      <div className="left-box image pr-2 py-3">
        <img
          src="https://assets-cdn.kantipurdaily.com/uploads/source/news/kantipur/2023/third-party/parliamentbuilding08-30112022020426-1000x0-2412023084728-1000x0.jpg"
          alt=""
        />
      </div>
      <div className="right-box pl-2 py-3">
        <div className="tittle">
          <h1 className="font-bold text-xl">
            Three questions and Three answer with parliament
          </h1>
        </div>

        <div className="date py-1">
          post Date:<span className="italic text-slate-500">2023/12/21</span>
        </div>
        <div className="info">
          The National Assembly or Rastriya Sabha (Nepali: राष्ट्रिय सभा;
          Rāṣṭriya sabhā) is the upper house of the Federal Parliament of Nepal,
          the lower house being the House of Representatives.
        </div>
        <div className="author flex justify-between pt-1">
          <p className="text-[#2988b9] font-semibold">
            Author:<span>Nepali Article</span>
          </p>
          <Link to="#" className="text-[#e67e22] font-semibold underline">
            see more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Post;
