import * as React from "react";
import { DashedProgress } from "../dashed-progress";
import { shallow, mount } from "enzyme";

describe("dashed progress", () => {
    const props: any = {
        size: 160,
        barWidth: 18,
        countBars: 30,
        trailThickness: 3,
        strokeThickness: 5,
        value: 20,
        strokeLinecap: "round",
        trailColor: "#354A5E",
        strokeColor: "#41B883",
        tooltipColor: "#354A5E",
        showTooltip: true,
        tooltipSize: 32,
    };

    it("dashed progress should render a svg", () => {
        const dashedProgress = shallow(<DashedProgress {...props} />);

        expect(dashedProgress.find("svg")).toHaveLength(1);
    });

    it("text", () => {
        const dashedProgress = shallow(<DashedProgress {...props} />);
        expect(dashedProgress.find("text").text()).toEqual("20%");
    });

    it("props", () => {
        const dashedProgress = mount(<DashedProgress {...props} />);

        expect(dashedProgress.props().size).toEqual(160);
        expect(dashedProgress.props().barWidth).toEqual(18);
        expect(dashedProgress.props().countBars).toEqual(30);
        expect(dashedProgress.props().trailThickness).toEqual(3);
        expect(dashedProgress.props().strokeThickness).toEqual(5);
        expect(dashedProgress.props().value).toEqual(20);
        expect(dashedProgress.props().strokeLinecap).toEqual("round");
        expect(dashedProgress.props().trailColor).toEqual("#354A5E");
        expect(dashedProgress.props().strokeColor).toEqual("#41B883");
        expect(dashedProgress.props().tooltipColor).toEqual("#354A5E");
        expect(dashedProgress.props().showTooltip).toEqual(true);
        expect(dashedProgress.props().tooltipSize).toEqual(32);
    });

    it("text does not render when showTooltip false", () => {
        const dashedProgress = shallow(<DashedProgress showTooltip={false} />);
        expect(dashedProgress.find("text").exists()).toEqual(false);
    });

    it("count bars", () => {
        const dashedProgress = shallow(<DashedProgress countBars={10} />);
        expect(dashedProgress.find("path")).toHaveLength(11);
    });
});
