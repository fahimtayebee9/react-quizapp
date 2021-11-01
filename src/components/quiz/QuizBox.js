import React from "react";
import { Data } from "../../modules/Data";
import Button from "./Button";
import CodeBox from "./CodeBox";
import Option from "./Option";
import Question from "./Question";
import QuizBoxHeader from "./QuizBoxHeader";
import Timer from "./Timer";

class QuizBox extends React.Component {
    constructor() {
        super();
        this.state = {
            currentActiveIndex: 0,
            result: 0,
            status: false,
            answers: [],
            timePerQuestion: 30,
            prevIndex: null,
        };
    }

    handleNext() {
        if (Data[this.state.currentActiveIndex].checked) {
            this.setState({
                currentActiveIndex:
                    this.state.currentActiveIndex < 9
                        ? this.state.currentActiveIndex + 1
                        : 0,
                status: this.state.currentActiveIndex === 9 ? true : false,
            });

            console.log(this.state.answers);
        } else {
            alert("Please Answer This Question First...");
        }
    }

    handleReset() {
        this.setState({
            currentActiveIndex: 0,
            result: 0,
            status: false,
            answers: [],
            timePerQuestion: 30,
            prevIndex: null,
        });
    }

    removeItem(item) {
        console.log(this.state.answers + " || " + item);
        this.state.answers.pop();
        console.log(this.state.answers + " || " + item);
        this.setState({
            answers: [...this.state.answers, item],
        });
        console.log(this.state.answers + " || " + item);
    }

    checkAnswer(event) {
        Data[this.state.currentActiveIndex].checked = true;
        this.setState({
            prevIndex: this.state.currentActiveIndex,
            answers:
                this.state.prevIndex === this.state.currentActiveIndex
                    ? [
                          ...this.state.answers,
                          event.target.getAttribute("data-order"),
                      ]
                    : [
                          ...this.state.answers,
                          event.target.getAttribute("data-order"),
                      ],
        });
        console.log(this.state.answers);
    }

    render() {
        if (this.state.status) {
            return (
                <div className="question">
                    <h4 id="question">All Questions Are Answered....</h4>
                </div>
            );
        } else {
            return (
                <div className="content">
                    <div className="content-head">
                        <Timer
                            hr="00"
                            min="00"
                            sc={this.state.timePerQuestion}
                        />
                        <div className="head-con">
                            {/* HEADER PART */}
                            <QuizBoxHeader
                                questionCount={this.state.currentActiveIndex}
                            />

                            {/* <!-- Question PROGRESS --> */}
                            {/* <QuestionProgressBar /> */}
                        </div>
                    </div>

                    {/* <!-- QuizBox --> currentActiveIndex={currentActiveIndex}  */}
                    <div className="quizArea">
                        <div className="row">
                            <div className="col-sm-11 col-md-10 m-auto quiz">
                                <Question
                                    question={
                                        Data[this.state.currentActiveIndex]
                                            .question
                                    }
                                />

                                {Data[this.state.currentActiveIndex].code !=
                                null ? (
                                    <CodeBox
                                        content={
                                            Data[this.state.currentActiveIndex]
                                                .code
                                        }
                                    />
                                ) : null}

                                <div className="row answers">
                                    {Object.keys(
                                        Data[this.state.currentActiveIndex]
                                            .answers
                                    ).map((key, i) => (
                                        <Option
                                            correct={
                                                Data[
                                                    this.state
                                                        .currentActiveIndex
                                                ].correct
                                            }
                                            datakey={key}
                                            key={
                                                Data[
                                                    this.state
                                                        .currentActiveIndex
                                                ].answers[key]
                                            }
                                            data={
                                                Data[
                                                    this.state
                                                        .currentActiveIndex
                                                ].answers[key]
                                            }
                                            action={this.checkAnswer.bind(this)}
                                        />
                                    ))}
                                </div>

                                <div className="row btn-area">
                                    <div className="col-sm-12 sm-320 col-md-6 d-flex align-items-center justify-content-between">
                                        <Button
                                            text="Reset"
                                            icon="fas fa-sync-alt"
                                            classes="btn-read btn-reset mr-2 d-inline-flex justify-content-between align-items-center w-100"
                                            action={this.handleReset.bind(this)}
                                        />

                                        <Button
                                            text="Next"
                                            icon="fas fa-arrow-right"
                                            classes="btn-read btn-next d-inline-flex justify-content-between align-items-center w-100"
                                            action={this.handleNext.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default QuizBox;
