import * as React from "react";

interface IProps {
    size?: number;
    barWidth?: number;
    countBars?: number;
    trailThickness?: number;
    strokeThickness?: number;
    value?: number;
    strokeLinecap?: "butt" | "square" | "round";
    trailColor?: string;
    strokeColor?: string;
    showTooltip?: boolean;
    tooltipSize?: number;
    tooltipColor?: string;
}

export class DashedProgress extends React.PureComponent<IProps, {}> {
    public static defaultProps: Partial<IProps> = {
        size: 160,
        barWidth: 18,
        countBars: 30,
        trailThickness: 3,
        strokeThickness: 5,
        value: 0,
        strokeLinecap: "round",
        trailColor: "#354A5E",
        strokeColor: "#41B883",
        tooltipColor: "#354A5E",
        showTooltip: true,
        tooltipSize: 32,
    };
    private radius: number;
    constructor(props: IProps) {
        super(props);
        const { barWidth } = this.props;
        this.radius = this.getCenter() - barWidth! * 1.25;
    }

    public getBars = () => {
        const {
            trailThickness,
            strokeThickness,
            value,
            strokeLinecap,
            strokeColor,
            trailColor,
        } = this.props;
        const directions = this.getPathDirections();
        return directions.map((direction: string, index: number) => {
            return (
                <path
                    d={direction}
                    style={{
                        transition: "stroke .3s ease-in",
                    }}
                    fill="transparent"
                    strokeWidth={
                        index <= value! ? strokeThickness! : trailThickness!
                    }
                    strokeLinecap={strokeLinecap}
                    key={index.toString()}
                    stroke={
                        index === 0
                            ? "transparent"
                            : index <= value!
                                ? strokeColor
                                : trailColor
                    }
                />
            );
        });
    };

    public getPathDirections = (): string[] => {
        const center = this.getCenter();
        const { barWidth, countBars } = this.props;
        const it = 360 / (countBars! * 2);
        const directions = [];
        for (let i = 180; i >= 0; i -= it) {
            const angle = (i * Math.PI) / 90;
            const points = [];

            const fromX = center + Math.sin(angle) * this.radius;
            const fromY = center + Math.cos(angle) * this.radius;

            const toX = center + Math.sin(angle) * (this.radius + barWidth!);
            const toY = center + Math.cos(angle) * (this.radius + barWidth!);

            points.push(`M${fromX} ${fromY}`);
            points.push(`${toX} ${toY}`);
            directions.push(points.join(", "));
        }
        return directions;
    };

    public getCenter = (): number => {
        return this.props.size! / 2;
    };

    public render() {
        const {
            size,
            showTooltip,
            tooltipSize,
            tooltipColor,
            value,
        } = this.props;
        return (
            <svg
                width={`${size}px`}
                height={`${size}px`}
                viewBox={`0 0 ${size} ${size}`}
            >
                {this.getBars()}
                {showTooltip && (
                    <text
                        x={size! / 2}
                        y={size! / 2 + tooltipSize! / 3}
                        textAnchor={"middle"}
                        fontSize={tooltipSize!}
                        fontFamily="Arial"
                        fill={tooltipColor}
                    >
                        {value}%
                    </text>
                )}
            </svg>
        );
    }
}
