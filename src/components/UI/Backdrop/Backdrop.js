import React from "react";

import classes from "./Backdrop.css";

const Backdrop = (props) => {
  return props.show ? (
    <div className={classes.Backrop} onClick={props.clicked}></div>
  ) : null;
};

export default Backdrop;
