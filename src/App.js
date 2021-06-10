import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import Fab from "@material-ui/core/Fab";
import ScrollTop from "./ScrollTop";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import StoresPage from "./pages/StoresPage/StoresPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";

import { compose } from "redux";
import { retrieveStores } from "./actions/storesAction";
const useStyles = makeStyles((theme) => ({
  fab: {
    borderRadius: 3,
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
  },
}));
function App({ mode, color, onRetriveStores }) {
  const classes = useStyles();
  useEffect(() => onRetriveStores(), []);
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
        <Switch>
          <Route
            exact
            path={"/"}
            render={() => {
              return <Redirect to={"/stores"} />;
            }}
          />
          <Route exact path={"/stores"} component={StoresPage} />
          <Route
            exact
            path={"/categories/:storeId"}
            component={CategoriesPage}
          />
          <Route
            exact
            path={"/products/:categoryId"}
            component={ProductsPage}
          />
          <Route component={PageNotFound} />
        </Switch>
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
const mapDispatchToProps = (dispatch) => ({
  onRetriveStores: () => {
    dispatch(retrieveStores());
  },
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
