import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./pages/News";
import Profile from "./pages/Profile";
import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core/styles";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="profile/:username" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
