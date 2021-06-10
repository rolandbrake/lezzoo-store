import React, { useState } from "react";
import { connect } from "react-redux";
import {
  createCategory,
  deleteCategory,
  updateCategory,
} from "../../actions/categoriesAction";
import { retrieveProducts } from "../../actions/productsAction";
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

const CategoriesPage = ({
  deleteCategory,
  createCategory,
  updateCategory,
  retrieveProducts,
  width,
  history,
  match,
  categories,
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Button onClick={() => setOpen(true)} className={classes.button}>
        <Typography>ADD CATEGORY</Typography>
      </Button>
      <Container maxWidth="lg">
        {categories.length !== 0 ? (
          <Grid
            className={classes.container}
            container
            justify={width === "xs" ? "center" : "flex-start"}
          >
            {categories.map((category, index) => (
              <Card
                key={index}
                title={category.title}
                id={category.id}
                description={category.description}
                image={category.image}
                handleDelete={deleteCategory}
                handleEdit={updateCategory}
                handleClick={() => {
                  dispatch(retrieveProducts(category.id)).then((res) =>
                    history.push(`/products/${category.id}`)
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
              There's no categories to display!
            </Typography>
          </Grid>
        )}
      </Container>
      <SubmitForm
        open={open}
        storeId={parseInt(match.params.storeId)}
        handleClose={handleClose}
        handleSubmit={createCategory}
      />
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCategory,
    deleteCategory,
    updateCategory,
    retrieveProducts,
  };
};

const mapStateToProps = (state, props) => {
  return {
    categories: state.categoryReducer.filter(function (category) {
      return category.storeId === parseInt(props.match.params.storeId);
    }),
  };
};
export default compose(
  withWidth(),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CategoriesPage);
