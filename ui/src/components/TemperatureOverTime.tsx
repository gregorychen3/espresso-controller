import { useTheme } from "@material-ui/core/styles";
import React from "react";
import { useSelector } from "react-redux";
import {
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { getTempHistory } from "../redux/selectors";
import Title from "./Title";

export default () => {
  const theme = useTheme();

  const samples = useSelector(getTempHistory);
  const data = samples.map((s) => ({
    time: s.observedAt.format("h:m:ssa"),
    temp: s.value,
  }));

  return (
    <>
      <Title>Temperature Over Time</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis
            domain={["auto", "auto"]}
            stroke={theme.palette.text.secondary}
          >
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Temperature (°C)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="temp"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
