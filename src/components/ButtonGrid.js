import React from "react";
import { withStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";

const styles = theme => ({
  buttonGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
    marginTop: "15px"
  },
  numButton: {
    backgroundColor: "#4d79ff",
    minHeight: "50px",
    minWidth: "50px",
    marginRight: "7px",
    marginLeft: "7px"
  },
  belowButton: {
    minWidth: "100px",
    backgroundColor: "#4d79ff",
    minHeight: "50px",
    marginRight: "7px",
    marginLeft: "7px"
  }
});

class ButtonGrid extends React.Component {
  handleButtonClick(val) {
    this.props.clicked(val);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.buttonGrid}>
          <button
            type="button"
            className={classes.numButton}
            onClick={() => this.handleButtonClick("1")}
          >
            1
          </button>

          <button
            type="button"
            className={classes.numButton}
            onClick={() => this.handleButtonClick("2")}
          >
            2
          </button>
          <button
            type="button"
            className={classes.numButton}
            onClick={() => this.handleButtonClick("3")}
          >
            3
          </button>
          <button
            type="button"
            className={classes.numButton}
            onClick={() => this.handleButtonClick("+")}
            disabled={this.props.isQuestionEmpty}
          >
            +
          </button>
        </div>
        <div className={classes.buttonGrid}>
          <button
            type="button"
            className={classes.numButton}
            onClick={() => this.handleButtonClick("4")}
          >
            4
          </button>
          <button
            type="button"
            className={classes.numButton}
            onClick={() => this.handleButtonClick("5")}
          >
            5
          </button>
          <button
            type="button"
            className={classes.numButton}
            onClick={() => this.handleButtonClick("6")}
          >
            6
          </button>
          <button
            type="button"
            className={classes.numButton}
            onClick={() => this.handleButtonClick("-")}
            disabled={this.props.isQuestionEmpty}
          >
            -
          </button>
        </div>
        <div className={classes.buttonGrid}>
          <button
            type="button"
            className={classes.numButton}
            onClick={() => this.handleButtonClick("7")}
          >
            7
          </button>
          <button
            type="button"
            className={classes.numButton}
            onClick={() => this.handleButtonClick("8")}
          >
            8
          </button>
          <button
            type="button"
            className={classes.numButton}
            onClick={() => this.handleButtonClick("9")}
          >
            9
          </button>
          <button
            type="button"
            className={classes.numButton}
            onClick={() => this.handleButtonClick("*")}
            disabled={this.props.isQuestionEmpty}
          >
            *
          </button>
        </div>
        <div className={classes.buttonGrid}>
          <button
            type="button"
            className={classes.numButton}
            onClick={() => this.handleButtonClick(".")}
          >
            .
          </button>
          <button
            type="button"
            className={classes.numButton}
            onClick={() => this.handleButtonClick("0")}
          >
            0
          </button>
          <button
            type="button"
            className={classes.numButton}
            onClick={() => this.handleButtonClick("=")}
            disabled={this.props.isQuestionEmpty}
          >
            =
          </button>
          <button
            type="button"
            className={classes.numButton}
            onClick={() => this.handleButtonClick("/")}
            disabled={this.props.isQuestionEmpty}
          >
            /
          </button>
        </div>
        <div className={classes.buttonGrid}>
          <button
            type="button"
            className={classes.belowButton}
            onClick={() => this.handleButtonClick("Delete")}
            disabled={this.props.isQuestionEmpty}
          >
            Delete
          </button>
          <button
            type="button"
            className={classes.belowButton}
            onClick={() => this.handleButtonClick("Clear")}
            disabled={this.props.isQuestionEmpty}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}

ButtonGrid.propTupes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonGrid);
