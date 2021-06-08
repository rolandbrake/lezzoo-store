import React from "react";

import MuiIconButton from "@material-ui/core/IconButton";
import Tooltip from "../Tooltip/Tooltip";
import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import buttonStyle from "../../assets/jss/components/buttonStyle";

const IconButton = ({
  children,
  size,
  title,
  classes,
  className,
  disabled,
  ...rest
}) => {
  const btnClasses = classNames({
    [classes.iconButton]: true,
    [className]: className,
    [classes.disabled]: disabled,
  });

  return (
    <Tooltip
      classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}
      title={title == null ? "" : title}
      placement="top"
      arrow
      round
    >
      <MuiIconButton
        {...rest}
        classes={{ disabled: classes.disabled }}
        className={btnClasses}
        size={size}
      >
        {children}
      </MuiIconButton>
    </Tooltip>
  );
};

IconButton.defaultProps = {
  size: "small",
  disabled: false,
};
export default withStyles(buttonStyle)(IconButton);
