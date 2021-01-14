import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { RouteComponentProps } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "500px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const Main = (to: RouteComponentProps) => {
  const classes = useStyles();

  return (
    <div>
      <Paper
        className={classes.mainFeaturedPost}
        style={{
          backgroundImage: `url(${"https://source.unsplash.com/random"})`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: "none" }}
            src="https://source.unsplash.com/random"
          />
        }
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                Code Penguins
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                CodePenguins is a free messaging Web & Desktop app, which helps
                everyone share their ideas and tips to other people in
                topic-related rooms named Igloos! Using this app is very easy
                and user-friendly! Just Download, register, pick a room and
                start chatting! 💓
              </Typography>
              <Link variant="subtitle1" href="#">
                Learn More
              </Link>
            </div>
          </Grid>
        </Grid>
      </Paper>

      <Paper></Paper>
    </div>
  );
};

export default Main;
