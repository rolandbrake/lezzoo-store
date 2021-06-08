const buttonStyle = (theme) => ({
  root: {
    color: theme.palette.common.white,
    transition: "all 0.15s ease-in-out",
    borderRadius: "0.2rem",
  },
  primary: {
    background: theme.palette.primary.main,
    "&:hover": {
      background: theme.palette.primary.light,
    },
  },
  secondary: {
    background: theme.palette.secondary.main,
    "&:hover": {
      background: theme.palette.secondary.light,
    },
  },
  larg: {
    padding: "8px 22px",
    fontSize: "0.9375rem",
    minHeight: 42,
  },
  small: {
    padding: "4px 10px",
    fontSize: "0.8125rem",
    minHeight: 30,
  },
  round: {
    borderRadius: 50,
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none",
    background: theme.palette.action.disabledBackground,
  },
  fullWidth: {
    width: "100%",
  },
  iconButton: {
    color: theme.palette.type === "light" ? "#111827" : "#ffffff",
    margin: theme.spacing(1),    
  },
});

export default buttonStyle;
