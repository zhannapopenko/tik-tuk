
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./pages/News";
import Profile from "./pages/Profile";
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
