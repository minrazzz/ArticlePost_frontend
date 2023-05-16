import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const API = "http://localhost:8000/article/add";

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

const CreateArticle = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    author: "",
    image: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const postArticle = async (e) => {
    e.preventDefault();
    for (const key in input) {
      if (input[key] === "") {
        setError("All fields are required!!!");
        return false;
      }
    }

    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("description", input.description);
    formData.append("author", input.author);
    formData.append("image", input.image);

    const response = await axios({
      method: "post",
      url: API,
      data: formData,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
        // authorization: Cookies.get("auth") ?? null,
      },
    });

    const data = response.data;
    console.log(data);
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
        className="pt-[50px] max-w-sm mx-auto "
        onSubmit={postArticle}
      >
        <h1 className="text-center text-2xl dark:text-white mb-2">
          Create Article
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
              description: prev.description,
              author: prev.author,
              image: prev.image,
            }))
          }
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          className=" block w-[100%] outline-none py-2 px-2 rounded-md mb-3 bg-yellow-300 dark:bg-slate-200"
          value={input.author}
          onChange={(e) =>
            setInput((prev) => ({
              title: prev.title,
              description: prev.description,
              author: e.target.value,
              image: prev.image,
            }))
          }
        />
        <input
          type="file"
          name="image"
          placeholder="Image"
          className="block w-full outline-none py-2 px-2 rounded-md mb-3 bg-yellow-300 dark:bg-slate-200"
          onChange={(e) =>
            setInput((prev) => ({
              title: prev.title,
              description: prev.description,
              author: prev.author,
              image: e.target.files[0],
            }))
          }
        />

        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={input.description}
          onChange={(value) =>
            setInput((prev) => ({
              title: prev.title,
              description: value,
              author: prev.author,
              image: prev.image,
            }))
          }
        />

        <div className="erro-box ">
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

export default CreateArticle;
