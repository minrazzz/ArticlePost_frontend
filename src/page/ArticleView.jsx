import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API = "http://localhost:8000/";

const ArticleView = () => {
  const [article, setArticle] = useState(null);
  const param = useParams();

  useEffect(() => {
    const getSingleArticle = async () => {
      const response = await axios({
        method: "get",
        url: API + "article/" + param.id,
        withCredentials: "true",
      });
      const data = response.data;
      console.log(response);
      setArticle(data.data);
      console.log(data);
    };
    getSingleArticle();
  }, []);
  if (!article) return null;

  return (
    <div className="mx-auto ">
      <div className="title my-5 dark:bg-slate-700 dark:rounded-lg ">
        <h1 className="text-center text-3xl font-bold dark:text-white uppercase ">
          {article ? article.title : ""}
        </h1>
      </div>
      <div className="image mb-4 mx-auto object-cover">
        <img
          src={API + article.image}
          alt="post"
          className=" mx-auto max-h-[450px]"
        />
      </div>
      <div className="description text-lg dark:text-white ">
        <p>{article.description}</p>
      </div>
    </div>
  );
};

export default ArticleView;
