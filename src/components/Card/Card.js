import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiCard from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "../Button/Button";
import IconButton from "../Button/IconButton";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import img from "./boss.jpg";
import Dialog from "../Dialog/Dialog";
import SubmitForm from "../Form/Form";
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    width: 250,
    height: "100%",
    margin: 32,
  },
  media: {
    height: 140,
  },
  button: {
    hegiht: 30,
  },
});

const Card = ({
  image,
  title,
  description,
  price,
  id,
  categoryId,
  handleEdit,
  handleDelete,
  handleClick,
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const classes = useStyles();

  return (
    <MuiCard className={classes.root}>
      <CardMedia className={classes.media} image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        {price && (
          <Typography
            style={{ marginTop: 16 }}
            variant="h4"
            color="primary"
            component="p"
          >
            ${price}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Grid container justify="space-between" alignItems="center">
          <Button
            onClick={handleClick}
            className={classes.button}
            size="small"
            color="primary"
          >
            See More
          </Button>
          <Grid item>
            <IconButton title="edit content" onClick={() => setOpenForm(true)}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              title="delete content"
              onClick={() => {
                setOpenDialog(true);
              }}
            >
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
      <Dialog
        open={openDialog}
        id={id}
        handleClose={() => setOpenDialog(false)}
        handleDelete={handleDelete}
      />
      <SubmitForm
        open={openForm}
        id={id}
        categoryId={categoryId}
        handleClose={() => setOpenForm(false)}
        handleSubmit={handleEdit}
      />
    </MuiCard>
  );
};

export default Card;
