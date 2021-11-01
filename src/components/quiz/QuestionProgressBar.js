const QuestionProgressBar = (() => {
    const display = () => {
        return (
            <div className="question-progress d-block">
                <ul className="d-flex list-unstyled question-progress-ul"></ul>
            </div>
        );
    };

    return display;
})();

export default QuestionProgressBar;
