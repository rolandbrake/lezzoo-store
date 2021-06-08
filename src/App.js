import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Card from "./components/Card/Card";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import Fab from "@material-ui/core/Fab";
import ScrollTop from "./ScrollTop";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";

import { compose } from "redux";

const useStyles = makeStyles((theme) => ({
  fab: {
    borderRadius: 3,
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  },
}));
function App({ mode, color }) {
  const classes = useStyles();
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: mode,
          primary: {
            main: color,
            contrastText: "#fff",
          },
          grey: {
            800: "#161b22",
          },
          background: {
            paper: mode === "light" ? "#ffffff" : "#1f2937",
            default: mode === "light" ? "#f9fafb" : "#111820",
          },
        },
        overrides: {
          MuiAppBar: {
            colorDefault: {
              backgroundColor: mode === "dark" ? "#111827" : "#ffffff",
            },
          },
        },
        typography: {
          fontFamily: "system-ui",
        },
      }),
    [mode, color]
  );
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Card
          title="HUGO BOSS"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica"
        />
        <PageNotFound />
        <Footer />
        <ScrollTop>
          <Fab
            size="small"
            aria-label="scroll back to top"
            color="primary"
            className={classes.fab}
          >
            <KeyboardArrowUpIcon color="inherit" />
          </Fab>
        </ScrollTop>
      </React.Fragment>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  mode: state.paletteReducer.mode,
  color: state.paletteReducer.color,
});

export default compose(withRouter, connect(mapStateToProps, null))(App);
