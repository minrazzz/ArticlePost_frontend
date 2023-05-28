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

  if (!articles.length <= 0) {
    return (
      <div className="no-data text-2xl font-bold grid  justify-center items-center min-h-[300px]">
        <h1>No Article Found!!</h1>
      </div>
    );
  }

  return (
    <div className="article-wrapper pt-[20px] grid gap-y-10">
      {articles?.map((article, index) => (
        <Articles key={index} {...article} />
      ))}
    </div>
  );
};

export default Home;
