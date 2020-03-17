import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  output: {
    float: "center",
    margin: "auto",

    paddingBottom: "10px",
    justifyContent: "center",
    display: "flex"
  }
});

const OutputScreen = props => {
  const classes = useStyles();
  return (
    <div className={classes.output}>
      <input
        type="text"
        disabled
        value={props.output}
        style={{ width: "100%", height: "100%" }}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default OutputScreen;
