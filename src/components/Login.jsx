import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format").required("required"),
    password: Yup.string().required("required"),
  });

  onsubmit = (values) => {
    // console.log("form data", values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onsubmit}
      >
        <Form className="mx-auto max-w-sm pt-3">
          <h1 className="text-3xl font-bold text-center mb-5 dark:text-white py-3">
            Login
          </h1>

          <div className="form-control">
            <ErrorMessage name="email" component={TextError} />
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
              className="block w-full py-2 mb-5 outline-none bg-yellow-300 rounded-md px-2 shadow-md dark:bg-white"
              type="text"
              placeholder="password"
              name="password"
            />
          </div>

          <div className="grid place-items-center">
            <button
              className="py-1 w-1/4 bg-yellow-300 rounded-md hover:bg-yellow-400 dark:bg-[#ced6e0] dark:hover:bg-[#b0bdce]"
              type="submit"
            >
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default Login;
