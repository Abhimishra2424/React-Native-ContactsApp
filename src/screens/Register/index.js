import React, { useEffect } from "react";
import RegisterComponent from "../../components/common/Register";
import axiosInstance from "../../helpers/axiosInterceptor";

const Register = () => {
  useEffect(() => {
    axiosInstance.get("/contacts/").catch((err) => {
      console.log(err);
    });
  }, []);

  return <RegisterComponent />;
};

export default Register;
