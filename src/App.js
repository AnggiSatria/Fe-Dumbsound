import React from "react";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import AddMusicAdmin from "./pages/AddMusicAdmin";
import AddArtistAdmin from "./pages/AddArtistAdmin";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/add/music" element={<AddMusicAdmin />} />
        <Route path="/admin/add/artist" element={<AddArtistAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
