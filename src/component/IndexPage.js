import React, { Component } from "react";

let cnt = 1;

export default class IndexPage extends Component {
  handleClickColor = e => {
    let { answer, score, onChange, createProblem, onPageChange } = this.props;
    if (answer === e.target.outerText) {
      onChange(++score);
      onPageChange("correct");
    } else {
      onChange(score);
      onPageChange("wrong");
    }
    createProblem();
  };

  render() {
    const { problem } = this.props;
    return (
      <div className="problem-list">
        {problem.map(item => (
          <li
            key={cnt++}
            className="problem"
            style={{ backgroundColor: `${item}` }}
            onClick={this.handleClickColor}
          >
            {item}
          </li>
        ))}
      </div>
    );
  }
}
