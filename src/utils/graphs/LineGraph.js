import { Typography } from "@mui/material";
import * as allCurves from "@visx/curve";
import { extent, max, min } from "d3-array";
import { Group } from "@visx/group";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { LinePath } from "@visx/shape";
import { scaleLinear } from "@visx/scale";
import React from "react";
import { withParentSize } from "@visx/responsive";
import { MarkerCircle } from "@visx/marker";
import { GradientTealBlue } from "@visx/gradient";

const LineGraph = ({ parentWidth, parentHeight, data, title }) => {
  // height and width are taken as parentWidth ** needs to be fixed
  const width = parentWidth;
  const height = parentWidth;
  const margin = { top: 30, right: 10, bottom: 30, left: 60 };

  // bounds
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // accessors
  const getX = (data) => data.X;
  const getY = (data) => data.Y;

  // scales
  const xScale = scaleLinear({
    domain: extent(data, getX),
  });
  const yScale = scaleLinear({
    domain: [
      min(data, getY) < 100000 ? min(data, getY) : min(data, getY) - 100000,
      max(data, getY),
    ],
  });

  //updating scale ranges
  xScale.range([0, innerWidth]);
  yScale.range([innerHeight, 0]);

  return (
    <div>
      <Typography fontWeight={"bold"}>{title} Graph</Typography>
      <svg width={width} height={height}>
        <GradientTealBlue id="blue" />
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill="url(#blue)"
          rx={10}
        />
        <MarkerCircle id="marker-circle" fill="maroon" size={1} refX={2} />
        <Group left={margin.left} top={margin.top}>
          <AxisBottom top={yMax} scale={xScale} />
          <AxisLeft scale={yScale} />
          <LinePath
            curve={allCurves.curveNatural}
            data={data}
            x={(d) => xScale(getX(d)) ?? 0}
            y={(d) => yScale(getY(d)) ?? 0}
            stroke="white"
            strokeWidth={2}
            markerMid="url(#marker-circle)"
          />
        </Group>
      </svg>
    </div>
  );
};

// withParentSzie used, so it takes parent width and height (props are parentWidth and parentHeight)
export default withParentSize(LineGraph);
