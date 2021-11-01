import React from "react";
import QuizBox from "../components/quiz/QuizBox";
import CircleContainer from "../components/ui/CircleContainer";

class App extends React.Component {
    // [currentActiveIndex, setState] = useState(0);

    render() {
        return (
            <section className="main">
                {/* BACKGROUND CIRCLES */}
                <CircleContainer />

                <div className="container">
                    <div className="row justify-content-center align-items-center dvx">
                        <div className="col-11 col-sm-11 col-md-12 col-lg-12">
                            <QuizBox />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default App;
