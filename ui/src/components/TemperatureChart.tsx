import { useTheme } from "@material-ui/core/styles";
import React from "react";
import { useSelector } from "react-redux";
import { Label, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { selectTempHistory } from "../redux/boilerTemperatureSlice";
import { selectPIDConfig } from "../redux/configurationSlice";

export default function TemperatureChart() {
  const theme = useTheme();

  const samples = useSelector(selectTempHistory);
  const data = samples.map((s) => ({
    time: s.observedAt.format("HH:mm"),
    temp: s.value,
  }));

  const targetTemp = useSelector(selectPIDConfig)?.targetTemp;

  return (
    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 16, right: 16, bottom: 0, left: 24 }}>
        <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
        <YAxis domain={["dataMin - 5", "dataMax + 5"]} stroke={theme.palette.text.secondary}>
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
        {targetTemp && (
          <ReferenceLine y={targetTemp.value} stroke="green" strokeDasharray="3 3" ifOverflow="extendDomain" />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
}
