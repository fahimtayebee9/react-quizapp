const Option = (props) => {
    return (
        <div className="col-md-6">
            <label htmlFor="choice">
                <input
                    type="radio"
                    className="option-input radio"
                    name="choice"
                    id={props.correct}
                    data-order={props.datakey}
                    onChange={props.action}
                />
                {props.data}
            </label>
        </div>
    );
};

export default Option;
