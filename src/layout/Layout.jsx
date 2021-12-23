import { Route, Routes } from "react-router-dom";
import VideosFeed from "../pages/VideosFeed";
import Profile from "../pages/Profile";
import Content from "./Content";
import Header from "./Header";

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
