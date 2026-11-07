export const CHART = {
  blue: "#5b8cff",
  violet: "#a06bff",
  coral: "#ff8a5c",
  green: "#2fbf8f",
  amber: "#f5b544",
  red: "#ef6b7a",
  grid: "#242842",
  axis: "#8f95b2",
  text: "#e6e8f2",
  surface: "#111427",
} as const;

export const axisProps = {
  stroke: CHART.axis,
  tick: { fill: CHART.axis, fontSize: 10 },
  tickLine: false,
  axisLine: false,
} as const;

export const tooltipStyle = {
  backgroundColor: "#171b32",
  border: "1px solid #2c3152",
  borderRadius: 10,
  color: CHART.text,
  fontSize: 11,
  padding: "8px 10px",
} as const;
