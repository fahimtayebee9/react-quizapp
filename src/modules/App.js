import React from "react";
import QuizBox from "../components/quiz/QuizBox";
import CircleContainer from "../components/ui/CircleContainer";

class App extends React.Component {
    // [currentActiveIndex, setState] = useState(0);
    constructor() {
        super();
        this.state = {
            start: false,
            viewQuiz: false,
        };
        this.quizArea = null;
    }

    startQuiz() {
        this.quizArea = <QuizBox />;
        this.setState({ viewQuiz: true, start: true });
        // return this.quizArea;
    }

    render() {
        return (
            <section className="main">
                {/* BACKGROUND CIRCLES */}
                <CircleContainer />

                <div className="container">
                    <div className="row justify-content-center align-items-center dvx">
                        <div className="col-11 col-sm-11 col-md-12 col-lg-12">
                            {/* <div className="content">
                                <div className="content-head">
                                    <div className="head-con">
                                        <QuizBoxHeader
                                            questionCount={null}
                                            showData={false}
                                        />
                                    </div>
                                </div>

                                <div className="welcome">
                                    <h4>Quiz Rules:</h4>
                                    <ul className="rules">
                                        <li>
                                            There are 10 questions in total.
                                        </li>
                                        <li>Each question contains 5 marks.</li>
                                        <li>
                                            You have to answer each question
                                            within 30seconds.
                                        </li>
                                        <li>
                                            If you fail to answer in time, you
                                            will lose marks.
                                        </li>
                                    </ul>
                                    <h1 className="gdluck">GOOD LUCK</h1>
                                    <div className="row btn-area">
                                        <div className="col-sm-6 sm-320 col-md-3 d-flex align-items-center justify-content-between">
                                            <Button
                                                text="START QUIZ"
                                                icon="fas fa-arrow-right"
                                                classes="btn-read btn-next d-inline-flex justify-content-between align-items-center w-100"
                                                action={this.startQuiz.bind(
                                                    this
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <QuizBox />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default App;
