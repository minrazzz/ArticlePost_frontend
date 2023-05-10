import React from "react";

function Post() {
  return (
    <div className="post-wrapper grid grid-cols-2  min-h-full">
      <div className="image">
        <img
          src="https://assets-cdn.kantipurdaily.com/uploads/source/news/kantipur/2023/third-party/parliamentbuilding08-30112022020426-1000x0-2412023084728-1000x0.jpg"
          alt=""
        />
      </div>
      <div className="discription">
        <div className="date"></div>
        <div className="author"></div>
      </div>
    </div>
  );
}

export default Post;
