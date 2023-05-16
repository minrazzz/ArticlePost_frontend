import React, { useEffect, useState } from "react";

// import Post from "./Post";
import Article from "./Article";
import axios from "axios";
import Articles from "../components/Article";

const API = "http://localhost:8000/article";

const Home = () => {
  const [articles, setArticles] = useState([]);
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

  return (
    <div className="article-wrapper pt-[20px] grid gap-y-10">
      {articles.map((article) => (
        <Articles {...article} />
      ))}
    </div>
  );
};

export default Home;
