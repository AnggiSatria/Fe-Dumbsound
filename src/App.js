import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { setAuthToken, API } from "./config/axios";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, LOGIN_SUCCESS } from "./redux/userSlice";

import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import UserPayment from "./pages/UserPayment";

import AdminPage from "./pages/AdminPage";
import AdminMusic from "./pages/AdminMusic";
import EditMusicAdmin from "./pages/EditMusicAdmin";
import AddMusicAdmin from "./pages/AddMusicAdmin";
import AddArtistAdmin from "./pages/AddArtistAdmin";

import PrivateRoute from "./component/PrivateRoute";

import ComplainAdmin from "./pages/ComplainAdmin";
import ComplainUser from "./pages/ComplainUser";

function App() {
  const user = useSelector(selectUser);

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  React.useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await API.get("/check/auth");
        dispatch(LOGIN_SUCCESS(response.data.data.user));
      } catch (error) {
        console.log(error);
      }
    };
    checkUser();
  }, []);

  React.useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, [user]);

  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/user" element={<UserPage />} />
          <Route path="/user/payment" element={<UserPayment />} />
          <Route path="/user/complain" element={<ComplainUser />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/music" element={<AdminMusic />} />
          <Route path="/admin/complain" element={<ComplainAdmin />} />
          <Route path="/admin/add/music" element={<AddMusicAdmin />} />
          <Route path="/admin/edit/music" element={<EditMusicAdmin />} />
          <Route path="/admin/add/artist" element={<AddArtistAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
