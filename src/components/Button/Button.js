import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LoadingButton from "@material-ui/lab/LoadingButton";
import classNames from "classnames";
import buttonStyle from "../../assets/jss/components/buttonStyle";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tooltip from "../Tooltip/Tooltip";
const Button = ({
  children,
  classes,
  className,
  color = "primary",
  size = "small",
  disableShadow,
  round = false,
  loading = false,
  disabled,
  title,
  fullWidth = false,
  ...rest
}) => {
  const PendingIndicator = (
    <CircularProgress color="inherit" size={size === "small" ? 16 : 24} />
  );
  const btnClasses = classNames({
    [classes.root]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.disabled]: disabled || loading,
    [classes.fullWidth]: fullWidth,
    [className]: className,
  });
  return (
    <Tooltip
      title={title == null || loading ? "" : title}
      placement="top"
      arrow
    >
      <LoadingButton
        className={btnClasses}
        disableElevation
        pendingIndicator={PendingIndicator}
        {...rest}
        pending={loading}
      >
        {children}
      </LoadingButton>
    </Tooltip>
  );
};

export default withStyles(buttonStyle)(Button);
