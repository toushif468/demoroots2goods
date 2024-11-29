"use client"

import { Bar, BarChart, Line, LineChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

// const data = [
//   {
//     revenue: 10400,
//     subscription: 240,
//   },
//   {
//     revenue: 14405,
//     subscription: 300,
//   },
//   {
//     revenue: 9400,
//     subscription: 200,
//   },
//   {
//     revenue: 8200,
//     subscription: 278,
//   },
//   {
//     revenue: 7000,
//     subscription: 189,
//   },
//   {
//     revenue: 9600,
//     subscription: 239,
//   },
//   {
//     revenue: 11244,
//     subscription: 278,
//   },
//   {
//     revenue: 26475,
//     subscription: 189,
//   },
// ]

const chartConfig = {
  revenue: {
    label: "Revenue",
    theme: {
      light: "black",
      dark: "white",
    },
  },
  subscription: {
    label: "Subscriptions",
    theme: {
      light: "black",
      dark: "white",
    },
  },
} satisfies ChartConfig

export function AnalyticsCard(props: any) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
      <Card className="min-w-[300px]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-normal">{props.tradeTitle}</CardTitle>
        </CardHeader>
        <CardContent className="pb-0">
          <div className="text-2xl font-bold">${props.tradeValue}</div>
          <p className="text-xs text-muted-foreground">
            +{props.tradeGrowth}% from last month
          </p>
          <ChartContainer config={chartConfig} className="h-[80px] w-full">
            <LineChart
              data={props.data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="revenue"
                activeDot={{
                  r: 6,
                  fill: "var(--color-revenue)",
                }}
                stroke="var(--color-revenue)"
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
      {/* <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-normal">Subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2350</div>
          <p className="text-xs text-muted-foreground">
            +180.1% from last month
          </p>
          <ChartContainer config={chartConfig} className="mt-2 h-[80px] w-full">
            <BarChart data={data}>
              <Bar
                dataKey="subscription"
                fill="var(--color-subscription)"
                radius={4}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card> */}
    </div>
  )
}