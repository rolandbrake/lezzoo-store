import React from "react";
import MuiTooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core";
import classNames from "classnames";
import tooltipStyle from "../../assets/jss/components/tooltipStyle.js";
const Tooltip = ({ classes, className, children, round, ...rest }) => {
  const tooltipClasses = classNames({
    [classes.root]: true,
    [classes.round]: round,
  });
  return (
    <MuiTooltip
      classes={{ tooltip: tooltipClasses, arrow: classes.arrow }}
      className={className}
      {...rest}
    >
      {children}
    </MuiTooltip>
  );
};

export default withStyles(tooltipStyle)(Tooltip);
