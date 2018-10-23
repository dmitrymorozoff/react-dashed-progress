import * as React from "react";
import * as ReactDOM from "react-dom";
import { DashedProgress } from "../src";

interface IState {
    value: number;
}

export class App extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = { value: 15 };
    }

    public handleChange = (value: any) => {
        this.setState({ value });
    };

    public handleChangeRange = (event: any) => {
        this.setState({
            value: event.target.valueAsNumber,
        });
    };

    public render() {
        const { value } = this.state;
        return (
            <div className="outer">
                <div className="header">
                    <h1 className="header-title">react-dashed-progress</h1>
                    <div className="header-subtitle">
                        A React.js component to draw circular progress bar
                    </div>
                </div>
                <div className="container">
                    <div className="wrapper">
                        <DashedProgress value={value} />
                        <div className="title">{value}</div>
                        <div className="range">
                            <input
                                min={0}
                                max={30}
                                id="control"
                                type="range"
                                value={value}
                                onChange={this.handleChangeRange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
