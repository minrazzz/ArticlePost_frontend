import axios from "axios";

import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UserContext } from "../contexts/UserContext";

const API = "http://localhost:8000/";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const EditArticle = () => {
  const param = useParams();
  const { profile } = useContext(UserContext);

  const [input, setInput] = useState({
    title: "",

    introduction: "",
    description: "",
    image: "",
  });

  const [preview, setPreview] = useState(null);

  const [error, setError] = useState(null);
  // console.log(profile);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (input.image) {
  //     const objectUrl = URL.createObjectURL(input.image);
  //     setPreview(objectUrl);
  //     return () => URL.revokeObjectURL(objectUrl);
  //   }
  // }, [input.image]);

  useEffect(() => {
    const getSingleArticle = async () => {
      const response = await axios({
        method: "get",
        url: API + "article/" + param.id,
        withCredentials: "true",
      });
      const data = response.data.data;
      // console.log(response.data);
      setInput({
        title: data.title,

        introduction: data.introduction,
        description: data.description,
        image: data.image,
      });
    };
    getSingleArticle();
  }, []);

  const editArticle = async (e) => {
    e.preventDefault();
    for (const key in input) {
      if (input[key] === "") {
        setError("All fields are required!!!");
        return false;
      }
    }

    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("introduction", input.introduction);
    formData.append("description", input.description);
    formData.append("author", profile ? profile.name : "");
    formData.append("author_id", profile ? profile.user_id : "");
    formData.append("image", input.image);

    const response = await axios({
      method: "put",
      url: API + "article/edit/" + param.id,
      data: formData,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
        // authorization: Cookies.get("auth") ?? null,
      },
    });

    const data = response.data;
    // console.log(data);
    if (!data.success) {
      setError(data.message);
      false;
    }

    navigate("/");
  };

  return (
    <>
      <form
        action=""
        className="pt-[50px] max-w-xl mx-auto "
        onSubmit={editArticle}
      >
        <h1 className="text-center text-2xl dark:text-white mb-2 font-lilita dark:text-white">
          Edit Article
        </h1>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className=" block w-[100%] outline-none py-2 px-2 rounded-md mb-3 bg-yellow-300 dark:bg-slate-200"
          value={input.title}
          onChange={(e) =>
            setInput((prev) => ({
              title: e.target.value,
              author: prev.author,

              introduction: prev.introduction,
              description: prev.description,

              image: prev.image,
            }))
          }
        />
        {/* <input
          type="text"
          name="author"
          placeholder="Author"
          className=" block w-[100%] outline-none py-2 px-2 rounded-md mb-3 bg-yellow-300 dark:bg-slate-200"
          value={input.author}
          onChange={(e) =>
            setInput((prev) => ({
              title: prev.title,

              introduction: prev.introduction,
              description: prev.description,
              image: prev.image,
            }))
          }
        /> */}
        <input
          type="text"
          name="introduction"
          placeholder="Introduction"
          className=" block w-[100%] outline-none py-2 px-2 rounded-md mb-3 bg-yellow-300 dark:bg-slate-200"
          value={input.introduction}
          onChange={(e) =>
            setInput((prev) => ({
              title: prev.title,
              author: prev.author,

              introduction: e.target.value,
              description: prev.description,
              image: prev.image,
            }))
          }
        />
        <input
          type="file"
          name="image"
          placeholder="Image"
          className="block w-full outline-none py-2 px-2 rounded-md mb-3 bg-yellow-300 dark:bg-slate-200"
          onChange={(e) => {
            setInput((prev) => ({
              title: prev.title,
              author: prev.author,

              introduction: prev.introduction,
              description: prev.description,

              image: e.target.files[0],
            }));
            const objectUrl = URL.createObjectURL(e.target.files[0]);
            setPreview(objectUrl);
          }}
        />
        <div className="image-preview grid items-center justify-center mb-3">
          {console.log(preview)}
          <img
            className="max-h-[200px]"
            src={preview ?? `${API}${input.image}`}
            alt=""
          />
        </div>

        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={input.description}
          onChange={(value) =>
            setInput((prev) => ({
              title: prev.title,
              author: prev.author,
              introduction: prev.introduction,
              description: value,

              image: prev.image,
            }))
          }
        />

        <div className="error-box ">
          <p className="text-red-500 font-semibold text-sm">
            {error ? error : ""}
          </p>
        </div>
        <div className="grid place-items-center  ">
          <button
            className="py-1 bg-yellow-300 w-1/4 rounded-md shadow-md hover:bg-yellow-400 dark:bg-[#ced6e0] mt-4"
            type="submit"
          >
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default EditArticle;
