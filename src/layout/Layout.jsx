import { Route, Routes } from "react-router-dom";
import VideosFeed from "../pages/VideosFeed.jsx";
import Profile from "../pages/Profile.jsx";
import Content from "./Content.jsx";
import Header from "./Header.jsx";

const Layout = () => (
  <>
    <Header />
    <Content>
      <Routes>
        <Route path="/" element={<VideosFeed />} />
        <Route path="profile/:username" element={<Profile />} />
      </Routes>
    </Content>
  </>
);

export default Layout;
