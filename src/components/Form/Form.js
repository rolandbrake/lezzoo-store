import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import Button from "../../components/Button/Button";
import Input from "../../components/TextField/Input";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { compose } from "redux";
import { withRouter } from "react-router";
import { toast } from "react-toastify";
import withWidth from "@material-ui/core/withWidth";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(2, 0),
  },
  form: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(4, 2),
  },
  button: { margin: theme.spacing(2, 0) },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export const SubmitForm = ({
  history,
  width,
  open,
  id,
  storeId,
  categoryId,
  handleClose,
  handleSubmit,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const initialValues = { title: "", description: "", image: "" };
  if (categoryId) initialValues.price = "";
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .max(32, "Must be shorter than 32 character")
      .required("Must enter a title"),
    description: Yup.string()
      .max(255, "Must be shorter than 255 character")
      .required("Please Enter a description"),
    image: Yup.string().required("Please Enter an image"),
  });
  return (
    <Dialog
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      open={open}
    >
      <Typography
        className={classes.title}
        variant="h4"
        gutterBottom
        marked="center"
        align="center"
      >
        SUBMIT
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          const { title, description, image, price } = values;
          if (id) {
            console.log({ id });
            dispatch(
              handleSubmit(id, {
                title,
                description,
                imageURL: image,
                ...(categoryId && { price: parseInt(price) }),
              })
            )
              .then((res) => {
                toast.success("the item was edited successfuly");
                setSubmitting(false);
                handleClose();
              })
              .catch((err) =>
                toast.error("something went wrong, please try again")
              );
          } else
            dispatch(
              handleSubmit({
                title,
                description,
                imageURL: image,
                ...(categoryId && { price: parseInt(price) }),
                ...(storeId && { storeId }),
                ...(categoryId && { categoryId }),
              })
            )
              .then((res) => {
                toast.success("the item was added successfuly");
                setSubmitting(false);
                handleClose();
              })
              .catch((err) =>
                toast.error("something went wrong, please try again")
              );
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form className={classes.form}>
            <Grid container direction="column">
              <Input
                title="title"
                name="title"
                placeholder="Enter your title"
                error={errors.title}
              />
              <Input
                title="description"
                name="description"
                placeholder="Enter your description"
                error={errors.description}
              />
              {categoryId && (
                <Input
                  title="price"
                  name="price"
                  placeholder="Enter product price"
                  error={errors.price}
                />
              )}
              <Input
                title="image"
                name="image"
                type="file"
                error={errors.image}
              />
            </Grid>
            <Button
              className={classes.button}
              type="submit"
              variant="contained"
              fullWidth
              size="larg"
              loading={isSubmitting}
            >
              SUBMIT
            </Button>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default compose(withRouter, withWidth())(SubmitForm);
