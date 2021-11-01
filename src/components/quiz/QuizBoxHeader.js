const QuizBoxHeader = (props) => {
    return (
        <div className="qHeader">
            <h1>Quiz Web-App</h1>
            <p className="questionCount">
                Question {props.questionCount + 1} of 10
            </p>
        </div>
    );
};

export default QuizBoxHeader;
