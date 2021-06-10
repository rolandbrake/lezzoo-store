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
  handleClose,
  handleSubmit,
}) => {
  const classes = useStyles();
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
        initialValues={{ title: "", description: "", image: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          const { title, description, image } = values;
          if (id) handleSubmit(id, { title, description, imageURL: image });
          else handleSubmit({ title, description, imageURL: image });
          setSubmitting(false);
          handleClose();
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
