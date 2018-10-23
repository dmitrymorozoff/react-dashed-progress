import * as React from "react";
import * as ReactDOM from "react-dom";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { ghcolors } from "react-syntax-highlighter/styles/prism";
import { DashedProgress } from "../src";

interface IState {
    value: number;
    value2: number;
}

export class App extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = { value: 15, value2: 7 };
    }

    public handleChange = (value: any) => {
        this.setState({ value });
    };

    public handleChangeRange = (event: any) => {
        this.setState({
            value: event.target.valueAsNumber,
        });
    };

    public handleChangeRangeValue2 = (event: any) => {
        this.setState({
            value2: event.target.valueAsNumber,
        });
    };

    public render() {
        const { value, value2 } = this.state;
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
                        <div className="slider">
                            <DashedProgress value={value} />
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
                        <div className="code">
                            <SyntaxHighlighter
                                wrapLines={true}
                                language="jsx"
                                style={ghcolors}
                            >
                                {`<DashedProgress />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="slider">
                            <DashedProgress value={value2} countBars={10} />
                            <div className="range">
                                <input
                                    min={0}
                                    max={10}
                                    id="control"
                                    type="range"
                                    value={value2}
                                    onChange={this.handleChangeRangeValue2}
                                />
                            </div>
                        </div>
                        <div className="code">
                            <SyntaxHighlighter
                                wrapLines={true}
                                language="jsx"
                                style={ghcolors}
                            >
                                {`<DashedProgress countBars={10} />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="slider">
                            <DashedProgress
                                value={value2}
                                countBars={10}
                                barWidth={14}
                                trailThickness={4}
                                strokeThickness={6}
                                size={70}
                                tooltipSize={16}
                                showTooltip={false}
                                strokeColor="#FF0101"
                            />

                            <div className="range">
                                <input
                                    min={0}
                                    max={10}
                                    id="control"
                                    type="range"
                                    value={value2}
                                    onChange={this.handleChangeRangeValue2}
                                />
                            </div>
                        </div>
                        <div className="code">
                            <SyntaxHighlighter
                                wrapLines={true}
                                language="jsx"
                                style={ghcolors}
                            >
                                {`<DashedProgress
    countBars={10}
    barWidth={14}
    trailThickness={4}
    strokeThickness={6}
    size={70}
    tooltipSize={16}
    showTooltip={false}
    strokeColor="#FF0101"
/>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="slider">
                            <DashedProgress
                                size={110}
                                value={value2}
                                countBars={20}
                                barWidth={10}
                                tooltipSize={26}
                                trailColor="#FF9D01"
                                trailThickness={7}
                            />
                            <div className="range">
                                <input
                                    min={0}
                                    max={10}
                                    id="control"
                                    type="range"
                                    value={value2}
                                    onChange={this.handleChangeRangeValue2}
                                />
                            </div>{" "}
                        </div>
                        <div className="code">
                            <SyntaxHighlighter
                                wrapLines={true}
                                language="jsx"
                                style={ghcolors}
                            >
                                {`<DashedProgress
    size={110}
    countBars={20}
    barWidth={10}
    tooltipSize={26}
    trailColor="#FF9D01"
    trailThickness={7}
/>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
