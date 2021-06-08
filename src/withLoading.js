import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";
import classNames from "classnames";

export const withLoading = (Component) => {
  return ({ classes, type = "circular", ...rest }) => {
    const [isLoading, setLoading] = useState(true);
    return isLoading ? (
      type === "circular" ? (
        <CircularProgress
          className={classNames({
            [classes.spinner]: classes.spinner,
          })}
        />
      ) : (
        <LinearProgress
          className={classNames({
            [classes.bar]: classes.bar,
          })}
        />
      )
    ) : (
      <Component {...rest} setLoading={setLoading} />
    );
  };
};
