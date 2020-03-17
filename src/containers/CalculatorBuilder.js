import React, { Component } from "react";
import Title from "../components/Title";
import { withStyles } from "@material-ui/core/styles";
import OutputScreen from "../components/OutputScreen";
import ButtonGrid from "../components/ButtonGrid";
import { Card, CardContent } from "@material-ui/core";
import PropTypes from "prop-types";

//higher order component which will hold other components

const styles = theme => ({
  root: {
    margin: "auto",
    float: "center",
    marginTop: "8%",
    display: "flex",
    flexWrap: "no-wrap",
    marginLeft: "40%"
  },
  cardContent: {
    padding: "30px"
  }
});

class CalculatorBuilder extends Component {
  constructor() {
    super();
    this.state = {
      question: "",
      result: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  //function which handles the click functionality of the buttons and updates the state
  handleClick(value) {
    switch (value) {
      case "Clear":
        this.setState({ question: "", result: "" }, () => {
          console.log("Cleared state");
        });
        break;
      case "Delete":
        let ques = this.state.question;
        ques = ques.substr(0, ques.length - 1);
        this.setState({ question: ques }, () => {
          console.log("Delete called");
        });
        if (ques === "") {
          this.setState({ result: "" }, () => {
            console.log("Result updated when question deleted");
          });
        }
        break;
      case "=":
        try {
          this.setState({ result: eval(this.state.question) }, () => {
            console.log("Result evaluated");
          });
        } catch (err) {
          this.setState({ result: "Invalid input" }, () => {
            console.log("Error occured");
          });
        }

        break;
      default:
        this.setState({ question: this.state.question + value }, () => {
          console.log("Question updated", this.state.question);
        });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Card elevation={3}>
          <CardContent className={classes.cardContent}>
            <Title title="My Calculator" />
            <OutputScreen output={this.state.question} />
            <OutputScreen
              output={this.state.result}
              placeholder="Your result"
            />
            <ButtonGrid
              clicked={value => this.handleClick(value)}
              isQuestionEmpty={this.state.question === ""}
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}

CalculatorBuilder.propTupes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CalculatorBuilder);
