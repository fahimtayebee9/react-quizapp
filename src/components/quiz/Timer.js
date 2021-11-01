import Span from "./Span";

const Timer = (props) => {
    // const [timePerQuestion, setTime]

    return (
        <div className="timer-tt">
            <div className="row d-flex align-items-center justify-content-between">
                <div className="col-md-6">
                    <p className="t-title">Time Left </p>
                </div>
                <div className="col-md-6">
                    <p id="time-text">
                        <Span objectId="hr" content={props.hr} /> :
                        <Span objectId="min" content={props.min} /> :
                        <Span objectId="sc" content={props.sc} />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Timer;
