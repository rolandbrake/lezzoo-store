import React from "react";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import footerStyle from "../../assets/jss/containers/footerStyle.js";

const Footer = ({ classes }) => {
  return (
    <footer className={classes.footer}>
      <Grid container justify="center" alignItems="center">
        <Typography align="center" variant="overline" className={classes.text}>
          Copyright © ROLAND BRAKE {new Date().getFullYear()}. All Rights
          Reserved.
        </Typography>
      </Grid>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(footerStyle)(Footer);
