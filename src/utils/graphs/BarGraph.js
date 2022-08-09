import { Typography } from "@mui/material";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { GradientPinkBlue } from "@visx/gradient";
import { Group } from "@visx/group";
import { withParentSize } from "@visx/responsive";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Bar } from "@visx/shape";
import React from "react";

const tickLabelProps = () => ({
  fill: "#fff",
  fontSize: 10,
  fontFamily: "sans-serif",
  textAnchor: "middle",
});

const BarGraph = ({ parentWidth, parentHeight, data, title }) => {
  // height and width are taken as parentWidth ** needs to be fixed
  const width = parentWidth;
  const height = parentWidth;
  const margin = { top: 30, right: 10, bottom: 30, left: 30 };
  const xMax = width - margin.right - margin.left;
  const yMax = height - margin.top - margin.bottom;

  // accessors
  const getX = (data) => data.X;
  const getY = (data) => data.Y;

  const xScale = scaleBand({
    range: [0, xMax],
    round: true,
    domain: data.map(getX),
    padding: 0.2,
  });

  const yScale = scaleLinear({
    range: [yMax, 0],
    round: true,
    domain: [Math.min(...data.map(getY)), Math.max(...data.map(getY))],
  });

  return (
    <div>
      <Typography fontWeight={"bold"}>{title} Graph</Typography>
      <svg width={width} height={height}>
        <GradientPinkBlue id="teal" />
        <rect width={width} height={height} fill="url(#teal)" rx={10} />
        <Group left={margin.left} top={margin.top}>
          <AxisLeft scale={yScale} />
          <AxisBottom
            scale={xScale}
            top={yMax}
            tickLabelProps={tickLabelProps}
          />
          {data.map((data) => {
            const x = getX(data);
            const barWidth = xScale.bandwidth();
            const barHeight = yMax - (yScale(getY(data)) ?? 0);
            const barX = xScale(x);
            const barY = yMax - barHeight;
            return (
              <Bar
                key={`bar-${x}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="rgba(23, 233, 217, .5)"
              />
            );
          })}
        </Group>
      </svg>
    </div>
  );
};

export default withParentSize(BarGraph);
