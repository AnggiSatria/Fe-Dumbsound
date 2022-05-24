import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API } from "../config/axios";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

const PrivateRoute = () => {
  // const navigate = useNavigate();
  // const user = useSelector(selectUser);
  // React.useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       const response = await API.get("/users");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getUsers();
  // }, [user]);

  let Getdatalogin = localStorage.getItem("token");
  let token = false;
  if (Getdatalogin !== null) {
    token = true;
  }

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
