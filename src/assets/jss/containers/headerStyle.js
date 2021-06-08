const headerStyle = (theme) => ({
  image: {
    width: 30,
    [theme.breakpoints.down("xs")]: {
      width: 25,
    },
    marginLeft: theme.spacing(2),
  },
  imageLink: {
    marginRight: "auto",
    display: "flex",
  },
  link: {
    display: "flex",
    marginRight: theme.spacing(3),
    color: theme.palette.text.primary,
    "& :hover": {
      color: theme.palette.primary.main,
    },
  },
  toolBar: {
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  appBar: {
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
  },
  drawer: {
    width: "80%",
  },
});

export default headerStyle;
