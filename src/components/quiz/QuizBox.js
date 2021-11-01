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
            prevIndex: null,
            time: {},
            seconds: 30,
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            h: hours,
            m: minutes,
            s: seconds,
        };
        return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds === 0) {
            // clearInterval(this.timer);
            this.handleNext();
        }
    }

    // HANDLE NEXT BUTTON
    handleNext() {
        if (Data[this.state.currentActiveIndex].checked) {
            this.setState({
                currentActiveIndex:
                    this.state.currentActiveIndex < 9
                        ? this.state.currentActiveIndex + 1
                        : 0,
                status: this.state.currentActiveIndex === 9 ? true : false,
                time: {},
                seconds: 31,
            });
            console.log(this.state.answers);
        } else {
            alert("Please Answer This Question First...");
        }
    }

    // HANDLE PREV BUTTON
    handleReset() {
        this.setState({
            currentActiveIndex: 0,
            result: 0,
            status: false,
            answers: [],
            prevIndex: null,
            time: {},
            seconds: 30,
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
            this.startTimer();
            return (
                <div className="content">
                    <div className="content-head">
                        {/* TIMER COMPONENT */}
                        <Timer time={this.state.time} />

                        <div className="head-con">
                            {/* HEADER PART */}
                            <QuizBoxHeader
                                questionCount={this.state.currentActiveIndex}
                                showData={true}
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
