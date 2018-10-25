# react-dashed-progress

> A React.js component to draw circular progress bar

## Examples

-   To check out live examples visit https://dmitrymorozoff.github.io/react-dashed-progress/

## Getting started

Install `react-dashed-progress` using npm.

### `npm install --save react-dashed-progress`


You can also test the components locally by cloning this repo and doing the following steps:

## NPM-scripts

Install dependencies from package.json:

### `npm install`

Runs the app in the development mode.<br>
Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

### `npm run dev`

Run linter

### `npm run lint`

Start tests followed by jest

### `npm run test`

## Usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { DashedProgress } from "react-dashed-progress";

export class App extends React.Component {
    render() {
        return (
            <DashedProgress value={5} />
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
```

## Props

| Props           | Type                       | Default   |
| --------------- | :------------------------- | --------- |
| size            | Number                     | 160       |
| barWidth        | Number                     | 18        |
| countBars       | Number                     | 30        |
| trailThickness  | Number                     | 3         |
| strokeThickness | Number                     | 5         |
| value           | Number                     | 0         |
| strokeLinecap   | "butt", "square" , "round" | "round"   |
| trailColor      | String                     | `#354A5E` |
| strokeColor     | String                     | `#41B883` |
| showTooltip     | Boolean                    | true      |
| tooltipSize     | Number                     | 32        |
| tooltipColor    | String                     | `#354A5E` |

## Todo

- [ ] Animation
- [ ] Accessibility 

## Contributing

- For bugs and feature requests, please create an issue
- Lint and test your code
- Pull requests and ⭐ stars are always welcome

## License

MIT