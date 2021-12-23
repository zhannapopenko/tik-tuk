import { Box } from "@mui/system";
import Spinner from "../assets/images/spinner.gif";

const Preloader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "90vh",
      }}>
      <img src={Spinner} alt="loader" />
    </Box>
  );
};

export default Preloader;
