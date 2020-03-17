import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    paddingBottom: "10px"
  }
});

const Title = props => {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <Typography align="center" variant="h4">
        {props.title}
      </Typography>
    </div>
  );
};
export default Title;
