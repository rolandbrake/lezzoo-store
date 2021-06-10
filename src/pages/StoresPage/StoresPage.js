import React, { useState } from "react";
import { connect } from "react-redux";
import {
  createStore,
  deleteStore,
  updateStore,
} from "../../actions/storesAction";
import { retrieveCategories } from "../../actions/categoriesAction";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import withWidth from "@material-ui/core/withWidth";
import { makeStyles } from "@material-ui/core/styles";
import SubmitForm from "../../components/Form/Form";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  button: {
    width: 150,
    height: 40,
    margin: theme.spacing(3),
    marginLeft: "auto",
  },
  container: {
    minHeight: "100vh",
  },
}));

const StoresPage = ({
  stores,
  deleteStore,
  createStore,
  updateStore,
  retrieveCategories,
  width,
  history,
}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Button onClick={() => setOpen(true)} className={classes.button}>
        <Typography>ADD STORE</Typography>
      </Button>
      <Container maxWidth="lg">
        {stores.length !== 0 ? (
          <Grid
            className={classes.container}
            container
            justify={width === "xs" ? "center" : "flex-start"}
          >
            {stores.map((store, index) => (
              <Card
                key={index}
                title={store.title}
                id={store.id}
                description={store.description}
                image={store.image}
                handleDelete={deleteStore}
                handleEdit={updateStore}
                handleClick={() => {
                  dispatch(retrieveCategories(store.id)).then((res) =>
                    history.push(`/categories/${store.id}`)
                  );
                }}
              />
            ))}
          </Grid>
        ) : (
          <Grid
            className={classes.container}
            container
            justify="center"
            alignItems="center"
          >
            <Typography align="center" variant={width === "xs" ? "h6" : "h4"}>
              There's no stores to display!
            </Typography>
          </Grid>
        )}
      </Container>
      <SubmitForm
        open={open}
        handleClose={handleClose}
        handleSubmit={createStore}
      />
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createStore,
    deleteStore,
    updateStore,
    retrieveCategories,
  };
};

const mapStateToProps = (state) => {
  return {
    stores: state.storeReducer,
  };
};

export default compose(
  withWidth(),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(StoresPage);
