import React, { useState } from "react";
import { connect } from "react-redux";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../../actions/productsAction";
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
  deleteProduct,
  createProduct,
  updateProduct,
  width,
  history,
  match,
  products,
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  const categoryId = parseInt(match.params.categoryId);
  return (
    <Grid container direction="column">
      <Button onClick={() => setOpen(true)} className={classes.button}>
        <Typography>ADD PRODUCT</Typography>
      </Button>
      <Container maxWidth="lg">
        {products.length !== 0 ? (
          <Grid
            className={classes.container}
            container
            justify={width === "xs" ? "center" : "flex-start"}
          >
            {products.map((product, index) => (
              <Card
                key={index}
                title={product.title}
                id={product.id}
                categoryId={categoryId}
                price={product.price}
                description={product.description}
                image={product.imageURL}
                handleDelete={deleteProduct}
                handleEdit={updateProduct}
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
              There's no products to display!
            </Typography>
          </Grid>
        )}
      </Container>
      <SubmitForm
        open={open}
        categoryId={parseInt(match.params.categoryId)}
        handleClose={handleClose}
        handleSubmit={createProduct}
      />
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProduct,
    deleteProduct,
    updateProduct,
  };
};

const mapStateToProps = (state, props) => {
  console.log(props);
  return {
    products: state.productReducer.filter(function (product) {
      return product.categoryId === parseInt(props.match.params.categoryId);
    }),
  };
};
export default compose(
  withWidth(),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CategoriesPage);
