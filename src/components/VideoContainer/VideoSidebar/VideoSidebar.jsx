import { Box } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import numberFormatting from "../../../numberFormatting";
import { videoSidebarStyles } from "./VideoSidebar.styles";

const VideoSidebar = ({ likes, comments, shareCount }) => {
  const classes = videoSidebarStyles();

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.container}>
        <Box className={classes.iconWrapper}>
          <FavoriteIcon sx={{ color: "red" }} fontSize="medium" />
        </Box>
        <Box className={classes.statistics}>{numberFormatting(likes)}</Box>
      </Box>
      <Box className={classes.container}>
        <Box className={classes.iconWrapper}>
          <CommentIcon fontSize="medium" />
        </Box>
        <Box className={classes.statistics}>{numberFormatting(comments)}</Box>
      </Box>
      <Box className={classes.container}>
        <Box className={classes.iconWrapper}>
          <ReplyOutlinedIcon fontSize="medium" />
        </Box>
        <Box className={classes.statistics}>{numberFormatting(shareCount)}</Box>
      </Box>
    </Box>
  );
};

export default VideoSidebar;
