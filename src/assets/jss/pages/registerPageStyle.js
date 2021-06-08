const registerPageStyle = (theme) => ({
  root: {
    minHeight: "100vh",
  },
  paper: {
    borderRadius: 5,
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4),
    },
  },
  form: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
  },
  button: { margin: theme.spacing(2, 0) },
  iconButton: {
    margin: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(1, 2),
      width: 60,
      height: 60,
    },
    width: 50,
    height: 50,
  },
  socialContainer: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-around",
    },
  },
  formControlLabel: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
});

export default registerPageStyle;
