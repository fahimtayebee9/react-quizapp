import React from "react";
import Span from "./Span";

const Timer = (props) => {
    return (
        <div className="timer-tt">
            <div className="row text-center d-flex align-items-center justify-content-center">
                <div className="col-md-8">
                    <p className="t-title">Time Left </p>
                </div>
                <div className="col-md-12">
                    <p id="time-text">
                        <Span objectId="hr" content={props.time.h} />
                        hr :
                        <Span objectId="min" content={props.time.m} />
                        min :
                        <Span objectId="sc" content={props.time.s} />
                        secs
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Timer;
