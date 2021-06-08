import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import linkStyle from "../../assets/jss/components/linkStyle";
const Link = withRouter(
  ({ children, history, className, classes, to, staticContext, ...rest }) => {
    const lnkClasses = classNames({
      [classes.root]: true,
      [className]: className,
    });
    return (
      <React.Fragment>
        {history.location.pathname === to ? (
          <span className={lnkClasses}>{children}</span>
        ) : (
          <NavLink className={lnkClasses} {...{ to, ...rest }}>
            {children}
          </NavLink>
        )}
      </React.Fragment>
    );
  }
);

export default withStyles(linkStyle)(Link);
