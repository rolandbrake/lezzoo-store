const headerStyle = (theme) => ({
  image: {
    maxWidth: 70,
    marginRight: theme.spacing(3),
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
  appBar: {
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
  },
  drawer: {
    width: "80%",    
  },
});

export default headerStyle;
