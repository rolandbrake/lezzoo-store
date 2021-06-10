import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "../../components/Button/IconButton";
import logo from "../../assets/img/logo-icon.png";

import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import InvertColorsIcon from "@material-ui/icons/InvertColors";

import Image from "../../components/Image/Image";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import headerStyle from "../../assets/jss/containers/headerStyle";
import { connect } from "react-redux";

const Header = ({
  classes,
  mode,
  changeMode,
  changeColor,
  history,
  location,
}) => {
  const COLORS = [
    "#7431ca",
    "#f50057",
    "#2979ff",
    "#f50057",
    "#00e676",
    "#00bcd4",
  ];
  const handleChangeMode = () =>
    mode === "light" ? changeMode("dark") : changeMode("light");
  return (
    <AppBar
      position="static"
      color="default"
      id="back-to-top-anchor"
      className={classes.appBar}
    >
      <Toolbar className={classes.toolBar}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={classes.container}
        >
          <Grid item>
            <Image
              src={logo}
              to="/"
              classes={{
                image: classes.image,
                link: classes.imageLink,
              }}
            />
          </Grid>
          <Typography>ADMIN PANEL</Typography>

          <Grid item>
            <IconButton
              onClick={() => {
                const color = Math.floor(Math.random() * 6);
                changeColor(COLORS[color]);
              }}
              title="change the main color"
            >
              <InvertColorsIcon />
            </IconButton>
            <IconButton
              onClick={handleChangeMode}
              title={
                mode === "light"
                  ? "switch to dark mode"
                  : "switch to light mode"
              }
            >
              {mode === "light" ? <Brightness3Icon /> : <WbSunnyOutlinedIcon />}
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
const mapStateToProps = (state) => ({
  mode: state.paletteReducer.mode,
});
const mapDispatchToProps = (dispatch) => ({
  changeMode(mode) {
    dispatch({ type: "CHANGE_MODE", mode });
  },
  changeColor(color) {
    dispatch({ type: "CHANGE_COLOR", color });
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(headerStyle)(withRouter(Header)));
