import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Layout from "./layout/Layout.jsx";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
