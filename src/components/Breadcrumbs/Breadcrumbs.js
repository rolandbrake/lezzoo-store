import React from "react";
import MuiBreadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import Link from "../Link/Link";

const style = (theme) => ({
  container: {
    padding: theme.spacing(3, 0),
  },
});
const Breadcrumbs = ({ crumbs, classes }) => {
  if (
    (crumbs.length === 1 && crumbs[0].path.includes("home")) ||
    crumbs.length === 0
  )
    return null;

  return (
    <Grid container justify="center" className={classes.container}>
      <MuiBreadcrumbs>
        <Link to="/">Home</Link>
        {crumbs.map(({ name, path }, key) =>
          key + 1 === crumbs.length ? (
            <Typography key={key}>{name}</Typography>
          ) : (
            <Link key={key} to={path}>
              {name}
            </Link>
          )
        )}
      </MuiBreadcrumbs>
    </Grid>
  );
};

export default withStyles(style)(Breadcrumbs);
