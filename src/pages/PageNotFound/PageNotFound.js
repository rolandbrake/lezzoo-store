import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";

import Button from "../../components/Button/Button";
import Link from "../../components/Link/Link";

const styles = (theme) => ({
  root: {
    height: "100vh",
  },
});
const PageNotFound = ({ classes, width }) => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
      direction="column"
    >
      <Typography variant={width === "xs" ? "h2" : "h1"}> 404 </Typography>
      <Typography
        align="center"
        variant={width === "xs" ? "h5" : "h4"}
        gutterBottom
      >
        {" "}
        Page not found!{" "}
      </Typography>
      <Link to="/">
        <Button
          // size={width === "xs" ? "small" : "larg"}
          size="larg"
          className={classes.button}
        >
          Admin Panel
        </Button>
      </Link>
    </Grid>
  );
};

export default withWidth()(withStyles(styles)(PageNotFound));
