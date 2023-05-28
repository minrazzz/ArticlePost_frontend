import axios from "axios";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import moment from "moment";
import { UserContext } from "../contexts/UserContext";
const API = "http://localhost:8000/";

const ArticleView = () => {
  const { profile } = useContext(UserContext);
  const [article, setArticle] = useState(null);
  // console.log(profile);
  // console.log(article);
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getSingleArticle = async () => {
      const response = await axios({
        method: "get",
        url: API + "article/" + param.id,
        withCredentials: "true",
      });
      const data = response.data;
      // console.log(response);
      setArticle(data.data);
    };
    getSingleArticle();
  }, []);
  if (!article) return null;

  const deleteArticles = async () => {
    const response = await axios({
      method: "delete",
      url: API + "article/delete/" + param.id,
      withCredentials: "true",
    });
    const data = response.data;
    if (data.success) {
      navigate("/");
    }
  };

  return (
    <div className="mx-auto ">
      <div className="title my-5 dark:bg-slate-700 dark:rounded-lg ">
        <h1 className="text-center text-3xl font-bold dark:text-white uppercase ">
          {article ? article.title : ""}
        </h1>
      </div>

      <div className="date flex justify-between items-center">
        <p className="text-center   text-md font-semibold text-[#7f7f7f] ">
          <span className=" pr-2 uppercase">{article.author}</span>:
          <span className="pl-2">
            {moment(article.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
          </span>
        </p>
        {profile?.user_id === article?.author_id && (
          <div className="action  flex gap-x-2 cursor-pointer pb-2  ">
            <Link
              to={`/edit-article/${article._id}`}
              className="min-w-[75px] bg-[#2980b9] px-6 py-1 rounded-md text-white shadow-sm font-semibold hover:bg-[#1f6a8a] dark:bg-slate-700 dark:hover:bg-slate-600"
            >
              <i className="fa-regular fa-pen-to-square mr-1"></i>
              Edit
            </Link>
            <Link
              to=""
              className="min-w-[80px] bg-red-500 px-4 py-1 rounded-md text-white shadow-sm font-semibold hover:bg-red-700 dark:hover:bg-red-600"
              onClick={() => {
                window.confirm("Are you sure") ? deleteArticles() : "";
              }}
            >
              <i className="fa-solid fa-trash-can mr-1"></i>
              Delete
            </Link>
          </div>
        )}
      </div>

      <div className="image mb-4 mx-auto  ">
        <img
          src={API + article.image}
          alt="post"
          className=" mx-auto max-h-[700px]   object-contain shadow-md  "
        />
      </div>
      <div className="introduction dark:text-white text-lg font-semibold">
        <p>{article.introduction}</p>
        <hr className="border-[#767676] my-3" />
      </div>
      <div className="description text-lg dark:text-white ">
        <div dangerouslySetInnerHTML={{ __html: article.description }}></div>
        {/* to set string format to html format used in quill*/}
      </div>
    </div>
  );
};

export default ArticleView;
