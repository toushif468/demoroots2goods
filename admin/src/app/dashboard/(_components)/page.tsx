"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  farmers: {
    label: "Farmers",
    color: "#fde68a", // Light yellow
  },
  traders: {
    label: "Traders",
    color: "#fcd34d", // Medium yellow
  },
  wholesalers: {
    label: "Wholesalers",
    color: "#fbbf24", // Darker yellow
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", farmers: 100, traders: 200, wholesalers: 300 },
  { month: "February", farmers: 150, traders: 250, wholesalers: 350 },
  { month: "March", farmers: 120, traders: 240, wholesalers: 360 },
  { month: "April", farmers: 90, traders: 180, wholesalers: 270 },
  { month: "May", farmers: 110, traders: 220, wholesalers: 330 },
  { month: "June", farmers: 130, traders: 260, wholesalers: 390 },
];

export function ComponentsGraph() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart
        accessibilityLayer
        data={chartData}
        margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tick={{ fontSize: 12, fill: "#ffffff" }}
          tickLine={{ stroke: "#ffffff" }}
          tickMargin={10}
          axisLine={{ stroke: "#ffffff" }}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tick={{ fontSize: 12, fill: "#ffffff" }}
          axisLine={false}
          tickLine={{ stroke: "#ffffff" }}
          label={{
            value: "Total Growth",
            angle: -90,
            position: "insideLeft",
            fill: "#ffffff",
            fontSize: 14,
          }}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="farmers" fill="var(--color-farmers)" radius={4} />
        <Bar dataKey="traders" fill="var(--color-traders)" radius={4} />
        <Bar dataKey="wholesalers" fill="var(--color-wholesalers)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
