import { useTheme } from "@material-ui/core/styles";
import React from "react";
import { useSelector } from "react-redux";
import { Label, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { getTempHistory } from "../redux/selectors";

export default function TemperatureChart() {
  const theme = useTheme();

  const samples = useSelector(getTempHistory);
  const data = samples.map((s) => ({
    time: s.observedAt.format("HH:mm"),
    temp: s.value,
  }));

  return (
    <>
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
          <YAxis domain={["auto", "auto"]} stroke={theme.palette.text.secondary}>
            <Label angle={270} position="left" style={{ textAnchor: "middle", fill: theme.palette.text.primary }}>
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
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
