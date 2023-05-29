import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API = "http://localhost:8000/user";

const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [passwordPreview, setPasswordPreview] = useState(false);
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();

    for (const key in input) {
      if (input[key] === "") {
        setError("All fields are required!!!");
        return false;
      }
    }

    const response = await axios({
      method: "post",
      url: API + "/add",
      data: input,
    });

    const data = response.data;
    if (!data.success) {
      setError(data.message);
      return false;
    }

    navigate("/login");
  };

  return (
    <form className="mx-auto max-w-sm pt-9 mt-5 " onSubmit={registerUser}>
      <h1 className="text-3xl font-bold text-center mb-5 dark:text-white py-3">
        Signup
      </h1>
      <input
        className="block w-full py-2 mb-5 outline-none bg-yellow-300 rounded-md px-2 shadow-md dark:bg-white"
        type="text"
        placeholder="Full Name"
        name="name"
        value={input.name}
        onChange={(e) =>
          setInput((prev) => ({
            name: e.target.value,
            email: prev.email,
            password: prev.password,
          }))
        }
      />
      <input
        className="block w-full py-2 mb-5 outline-none bg-yellow-300 rounded-md px-2 shadow-md dark:bg-white"
        type="text"
        placeholder="Email"
        name="email"
        value={input.email}
        onChange={(e) =>
          setInput((prev) => ({
            name: prev.name,
            email: e.target.value,
            password: prev.password,
          }))
        }
      />

      <div className="input-box relative ">
        <input
          className="block w-full py-2 mb-5 outline-none bg-yellow-300 rounded-md px-2 shadow-md dark:bg-white"
          type={passwordPreview ? "text" : "password"}
          placeholder="Password"
          name="password"
          value={input.password}
          onChange={(e) =>
            setInput((prev) => ({
              name: prev.name,
              email: prev.email,
              password: e.target.value,
            }))
          }
        />
        <div
          className="icon absolute top-2 right-2"
          onClick={() => setPasswordPreview(!passwordPreview)}
        >
          {passwordPreview ? (
            <i className="fa-solid fa-eye text-sm"></i>
          ) : (
            <i className="fa-solid fa-eye-slash text-sm"></i>
          )}
        </div>
      </div>
      <div className="error-box ">
        <p className="text-red-500 font-semibold text-sm">
          {error ? error : ""}
        </p>
      </div>
      <div className="grid place-items-center">
        <button
          type="submit"
          className="py-1 w-1/4 bg-yellow-300 rounded-md hover:bg-yellow-400 dark:bg-[#ced6e0] dark:hover:bg-[#b0bdce]"
        >
          Signup
        </button>
      </div>
    </form>
  );
};

export default Signup;
