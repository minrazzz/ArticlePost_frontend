import React, { useEffect, useState } from "react";

// import Post from "./Post";

import axios from "axios";
import Articles from "../components/Article";

const API = "http://localhost:8000/article";

const Home = () => {
  const [articles, setArticles] = useState(null);
  // console.log(articles);
  useEffect(() => {
    const getArticle = async () => {
      const response = await axios({
        method: "get",
        url: API,
        withCredentials: true,
      });
      const data = response.data;
      setArticles(data.data);
      // console.log(data.data);
    };
    getArticle();
  }, []);

  if (!articles) {
    return (
      <div className="loading grid  justify-center items-center min-h-[300px]">
        <img className="h-[50px] dark:text-white" src="spinner.gif" alt="" />
      </div>
    );
  }

  if (articles.length <= 0) {
    return (
      <div className="no-data text-2xl font-bold grid  justify-center items-center min-h-[300px]">
        <h1 className="dark:text-white">No Article Found!!</h1>
      </div>
    );
  }

  return (
    <>
      <div className="article-wrapper pt-[20px] grid gap-y-5">
        {articles?.map((article, index) => (
          <Articles key={index} {...article} />
        ))}
      </div>
      {articles.length > 10 && (
        <div className="see-more flex  justify-center items-center">
          <div className="flex flex-col justify-center items-center pb-3 pt-3 cursor-pointer">
            <h1 className="font-semibold  ">See More</h1>
            <i class="fa-solid fa-angles-down"></i>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
