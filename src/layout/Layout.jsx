import React from "react";
import { Route, Routes } from "react-router-dom";
import News from "../pages/News";
import Profile from "../pages/Profile";
import Content from "./Content";
import Header from "./Header";

const Layout = () => (
  <>
    <Header />
    <Content>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="profile/:username" element={<Profile />} />
      </Routes>
    </Content>
  </>
);

export default Layout;
