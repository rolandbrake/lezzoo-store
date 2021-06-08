import React from "react";
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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 32,
  },
  media: {
    height: 140,
  },
  button: {
    hegiht: 30,
  },
});

const Card = ({ image, title, description }) => {
  const classes = useStyles();

  return (
    <MuiCard className={classes.root}>
      {/* <CardActionArea> */}
      <CardMedia className={classes.media} image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
      <CardActions>
        <Grid container justify="space-between" alignItems="center">
          <Button className={classes.button} size="small" color="primary">
            See More
          </Button>
          <Grid item>
            <IconButton title="edit content">
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton title="delete content">
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
