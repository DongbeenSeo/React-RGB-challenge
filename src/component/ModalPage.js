import React, { Component } from "react";

export default class ModalPage extends Component {
  handleCorrectBtnClick = e => {
    let { onPageChange } = this.props;
    onPageChange("main");
  };

  handleWrongBtnClick = e => {
    let { score, onChange, onPageChange } = this.props;
    score = 0;
    onChange(score);
    onPageChange("main");
  };

  render() {
    const { score, pageState } = this.props;

    return (
      <div>
        {pageState === "correct" ? (
          <div>
            <div>THAT'S RIGHT</div>
            <button onClick={this.handleCorrectBtnClick}>NEXT COLOR</button>
          </div>
        ) : (
          <div>
            <div>TOO BAD :( </div>
            <div>score: {score}</div>
            <button onClick={this.handleWrongBtnClick}>PLAT AGAIN</button>
          </div>
        )}
      </div>
    );
  }
}
