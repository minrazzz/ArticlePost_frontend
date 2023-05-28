import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
const API = "http://localhost:8000/user";

const Login1 = () => {
  const { setProfile } = useContext(UserContext);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [passwordPreview, setPasswordPreview] = useState(false);

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    for (const key in input) {
      if (input[key] === "") {
        setError("All fields are required!!");
      }
    }

    const response = await axios({
      method: "post",
      url: API + "/login",
      data: input,
      withCredentials: true,
    });

    // console.log(response);
    const data = response.data;

    if (!data.success) {
      setError(data.message);
      return false;
    }

    setProfile({
      user_id: data.data.user_id,
      name: data.data.name,
      email: data.data.email,
    });

    navigate("/");
  };

  return (
    <form className="mx-auto max-w-sm pt-3" onSubmit={loginUser}>
      <h1 className="text-3xl font-bold text-center mb-5 dark:text-white py-3">
        Login
      </h1>
      <input
        className="block w-full py-2 mb-5 outline-none bg-yellow-300 rounded-md px-2 shadow-md dark:bg-white"
        type="text"
        placeholder="Email"
        name="email"
        value={input.email}
        onChange={(e) =>
          setInput((prev) => ({
            email: e.target.value,
            password: prev.password,
          }))
        }
      />
      <div className="input-box relative">
        <input
          className="block w-full py-2 mb-5 outline-none bg-yellow-300 rounded-md px-2 shadow-md dark:bg-white"
          type="text"
          placeholder="password"
          name="password"
          value={input.password}
          onChange={(e) =>
            setInput((prev) => ({
              email: prev.email,
              password: e.target.value,
            }))
          }
        />
        <div
          className="icon absolute top-[7px] right-[8px] cursor-pointer"
          onClick={() => setPasswordPreview(!passwordPreview)}
        >
          {passwordPreview ? (
            <i className="fa-solid fa-eye text-sm"></i>
          ) : (
            <i className="fa-solid fa-eye-slash text-sm"></i>
          )}
        </div>
      </div>

      <div className="erro-box ">
        <p className="text-red-500 font-semibold text-sm">
          {error ? error : ""}
        </p>
      </div>

      <div className="grid place-items-center">
        <button
          className="py-1 w-1/4 bg-yellow-300 rounded-md hover:bg-yellow-400 dark:bg-[#ced6e0] dark:hover:bg-[#b0bdce]"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Login1;
