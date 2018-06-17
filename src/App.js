import React, { Component } from "react";
import "./App.css";

import IndexPage from "./component/IndexPage.js";
import ModalPage from "./component/ModalPage.js";

class App extends Component {
  state = {
    score: 0,
    answer: [],
    problem: [],
    pageState: "main"
  };
  randomNumber = () => {
    return Math.floor(Math.random() * 256);
  };
  createRGBcode = () => {
    return [
      `${this.randomNumber()}`,
      `${this.randomNumber()}`,
      `${this.randomNumber()}`
    ];
  };

  createProblem = () => {
    let { answer, problem } = this.state;

    problem = [
      `rgb(${this.createRGBcode()})`,
      `rgb(${this.createRGBcode()})`,
      `rgb(${this.createRGBcode()})`
    ];

    answer = problem[Math.floor(Math.random() * 3)];
    this.setState({
      problem: problem,
      answer: answer
    });
  };

  handleCheckScore = score => {
    this.setState({
      score: score
    });
  };

  handlePageState = state => {
    console.log(state);
    this.setState({
      pageState: state
    });
  };

  componentDidMount() {
    this.createProblem();
  }

  render() {
    const { answer, problem, score, pageState } = this.state;

    return (
      <div>
        {pageState === "main" ? (
          <div className="mainpage">
            THE GREAT
            <h1>RGB Challenge</h1>GUESSING CHALLENGE
            <div>score: {score}</div>
            <div>{answer}</div>
            <ul>
              <IndexPage
                answer={answer}
                problem={problem}
                score={score}
                onChange={this.handleCheckScore}
                createProblem={this.createProblem}
                onPageChange={this.handlePageState}
              />
            </ul>
          </div>
        ) : (
          <div>
            <ModalPage
              score={score}
              pageState={pageState}
              onChange={this.handleCheckScore}
              onPageChange={this.handlePageState}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
