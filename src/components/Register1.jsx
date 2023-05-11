import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:8000/user";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

function Register1() {
  const validationSchema = Yup.object({
    name: Yup.string().required("required!!"),
    email: Yup.string().email("inavlid email!!").required("required!!"),

    password: Yup.string().required("required!!"),
  });
  const [Error, setError] = useState(null);
  const navigate = useNavigate();

  return (
    <Formik
      // disable on every keystroke
      initialValues={initialValues}
      validationSchema={validationSchema}
      // validateOnChange={false}

      async
      onSubmit={async (data, { setSubmitting }) => {
        let formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password);
        const response = await axios({
          method: "POST",
          url: BASE_URL + "/add ",
          data: formData,
        });
        console.log(response.data);

        const datas = response.data;
        if (!datas.success) {
          setError(datas.message);
          return false;
        }
        alert("Successfully registered!!");
        navigate("/login");
      }}
    >
      <Form className="mx-auto max-w-sm pt-9 mt-5" action="">
        <h1 className="text-3xl font-bold text-center mb-5 dark:text-white py-3">
          Register
        </h1>

        <div className="form-control">
          <ErrorMessage name="name" component={TextError} />

          <Field
            className="block w-full py-2 mb-5 outline-none bg-yellow-300 rounded-md px-2 shadow-md dark:bg-white"
            type="text"
            placeholder="Full name"
            name="name"
          />
        </div>

        <div className="form-control">
          <ErrorMessage name="email" component={TextError} />
          {Error ? Error : ""}

          <Field
            className="block w-full py-2 mb-5 outline-none bg-yellow-300 rounded-md px-2 shadow-md dark:bg-white"
            type="text"
            placeholder="Email"
            name="email"
          />
        </div>

        <div className="form-control">
          <ErrorMessage name="password" component={TextError} />
          <Field
            className="block w-full py-2 mb-5  outline-none bg-yellow-300 rounded-md px-2 shadow-md dark:bg-white"
            type="text"
            placeholder="Password"
            name="password"
          />
        </div>

        <div className="error-box">
          <p className="text-red-500 font-semibold text-sm"></p>
        </div>

        <div className="grid place-items-center">
          <button
            className="py-1 w-1/4 bg-yellow-300 rounded-md hover:bg-yellow-400 dark:bg-[#ced6e0] dark:hover:bg-[#b0bdce]"
            type="submit"
          >
            Register
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default Register1;
