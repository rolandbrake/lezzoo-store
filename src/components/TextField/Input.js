import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Field } from "formik";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  input: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    border: "1px solid",
    borderColor:
      theme.palette.type === "ligh"
        ? theme.palette.grey[800]
        : theme.palette.grey[600],
    outline: "none",
    fontSize: 16,
    borderRadius: 5,
    width: "100%",
    "& input": {
      boxShadow: `0 0 0 1000px ${theme.palette.background.default} inset`,
      textFillColor: theme.palette.text.primary,
      caretColor: theme.palette.text.primary,
    },
  },
  error: {
    borderColor: theme.palette.error.main,
  },
  icon: {
    cursor: "pointer",
    color:
      theme.palette.type === "light"
        ? theme.palette.common.black
        : theme.palette.common.white,
  },
  iconDisabled: {
    cursor: "default",
    color:
      theme.palette.type === "ligh"
        ? theme.palette.grey[800]
        : theme.palette.grey[600],
  },
}));
const Input = ({
  name,
  title,
  placeholder = "",
  type = "input",
  error,
  children,
  className,
  disabled = false,
  ...rest
}) => {
  const classes = useStyles();
  const [visible, setVisible] = React.useState(false);
  const handleVisibility = () => (disabled ? null : setVisible(!visible));
  return (
    <>
      <Typography variant="overline">{title}</Typography>
      <Field name={name} id={name} placeholder={placeholder} {...rest}>
        {({ field }) => (
          <TextField
            className={classNames(classes.input, className, {
              [classes.error]: error,
            })}
            disabled={disabled}
            type={type === "password" ? (visible ? "text" : "password") : type}
            name={name}
            placeholder={placeholder}
            {...field}
            InputProps={{
              endAdornment: type === "password" && (
                <InputAdornment position="end">
                  {visible ? (
                    <VisibilityOffIcon
                      className={classes.icon}
                      onClick={handleVisibility}
                    />
                  ) : (
                    <VisibilityIcon
                      className={classNames(classes.icon, {
                        [classes.iconDisabled]: disabled,
                      })}
                      onClick={handleVisibility}
                    />
                  )}
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
        )}
      </Field>
      {error && (
        <Typography color="error" variant="subtitle2">
          {error}
        </Typography>
      )}
    </>
  );
};

export default Input;
