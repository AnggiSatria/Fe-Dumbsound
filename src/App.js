import React from "react";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import AddMusicAdmin from "./pages/AddMusicAdmin";
import AddArtistAdmin from "./pages/AddArtistAdmin";
import UserPayment from "./pages/UserPayment";
import AdminMusic from "./pages/AdminMusic";
import PrivateRoute from "./component/PrivateRoute";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { setAuthToken } from "./config/axios";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/userSlice";
import EditMusicAdmin from "./pages/EditMusicAdmin";

function App() {
  const user = useSelector(selectUser);

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  React.useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/user" element={<UserPage />} />
          <Route path="/user/payment" element={<UserPayment />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/music" element={<AdminMusic />} />
          <Route path="/admin/add/music" element={<AddMusicAdmin />} />
          <Route path="/admin/edit/music" element={<EditMusicAdmin />} />
          <Route path="/admin/add/artist" element={<AddArtistAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
