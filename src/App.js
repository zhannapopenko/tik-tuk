import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

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
