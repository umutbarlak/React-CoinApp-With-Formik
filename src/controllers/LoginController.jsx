import React from "react";
import LoginView from "../views/LoginView";
import { useFormik } from "formik";
import { schema } from "../schema";
import { useNavigate } from "react-router-dom";

const LoginController = () => {
  const navigete = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },

    validationSchema: schema,

    onSubmit: (values, actions) => {
      navigete("/home");
    },
  });
  return <LoginView formik={formik} />;
};

export default LoginController;
