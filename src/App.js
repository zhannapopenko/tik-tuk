import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./pages/News";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<News />}/>
        <Route path="profile" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
