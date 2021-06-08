import React from "react";
import Link from "../Link/Link";
import { connect } from "react-redux";

const Image = ({ src, alt = "", to, mode, classes, ...rest }) => {
  const Img = (
    <img
      alt={alt}
      src={src instanceof Array ? (mode === "light" ? src[0] : src[1]) : src}
      className={classes.image}
      {...rest}
    />
  );
  return (
    <>
      {to ? (
        <Link to={to} className={classes.link}>
          {Img}
        </Link>
      ) : (
        Img
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  mode: state.paletteReducer.mode,
});

export default connect(mapStateToProps, {})(Image);
