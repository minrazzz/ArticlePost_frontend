import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log("form data", values);
};

// const validate = (values) => {

//   let errors = {};
//   if (!values.name) {
//     errors.name = "required";
//   }

//   if (!values.email) {
//     errors.email = "required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   if (!values.password) {
//     errors.password = "required";
//   }

//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required("required!!"),
  email: Yup.string().email("Invalid Email Format!!").required("required!!"),
  password: Yup.string().required("required!!"),
});

function Register1() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
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
