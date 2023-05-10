import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "required";
  }

  if (!values.email) {
    errors.email = "required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "required";
  }

  return errors;
};

function Register() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log("visited fileds", formik.touched);
  return (
    <form
      className="mx-auto max-w-sm pt-9 mt-5"
      action=""
      onSubmit={formik.handleSubmit}
    >
      <h1 className="text-3xl font-bold text-center mb-5 dark:text-white py-3">
        Register
      </h1>

      <div className="form-control">
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500">{formik.errors.name}</div>
        ) : null}

        <input
          className="block w-full py-2 mb-5 outline-none bg-yellow-300 rounded-md px-2 shadow-md dark:bg-white"
          type="text"
          placeholder="Full name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} //formik validation of visited fields
          value={formik.values.name}
        />
      </div>

      <div className="form-control">
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500">{formik.errors.email}</div>
        ) : null}
        <input
          className="block w-full py-2 mb-5 outline-none bg-yellow-300 rounded-md px-2 shadow-md dark:bg-white"
          type="text"
          placeholder="Email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} //formik validation of visited fields
          value={formik.values.email}
        />
      </div>

      <div className="form-control">
        {formik.touched.password && formik.errors.password ? (
          <div className=" text-red-500">{formik.errors.password}</div>
        ) : null}
        <input
          className="block w-full py-2 mb-5  outline-none bg-yellow-300 rounded-md px-2 shadow-md dark:bg-white"
          type="text"
          placeholder="Password"
          name="password"
          onChange={formik.handleChange} //formink state change
          onBlur={formik.handleBlur} //formik validation of visited fields
          value={formik.values.password} //formik state change
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
    </form>
  );
}

export default Register;
