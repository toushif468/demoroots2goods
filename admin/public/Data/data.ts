import { ChartConfig } from "@/components/ui/chart";

// export const AgroTradeData = [
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
// ];

// export const Tradesales = [
//   {
//     revenue: 10441,
//     subscription: 240,
//   },
//   {
//     revenue: 18905,
//     subscription: 300,
//   },
//   {
//     revenue: 6666,
//     subscription: 200,
//   },
//   {
//     revenue: 4343,
//     subscription: 278,
//   },
//   {
//     revenue: 15345,
//     subscription: 189,
//   },
//   {
//     revenue: 4414,
//     subscription: 239,
//   },
//   {
//     revenue: 33653,
//     subscription: 278,
//   },
//   {
//     revenue: 19873,
//     subscription: 215,
//   },
// ];

// export const Retails = [
//   {
//     revenue: 567847,
//     subscription: 240,
//   },
//   {
//     revenue: 687496,
//     subscription: 300,
//   },
//   {
//     revenue: 58585,
//     subscription: 200,
//   },
//   {
//     revenue: 54535,
//     subscription: 278,
//   },
//   {
//     revenue: 64780,
//     subscription: 189,
//   },
//   {
//     revenue: 334501,
//     subscription: 239,
//   },
//   {
//     revenue: 60998,
//     subscription: 278,
//   },
//   {
//     revenue: 456861,
//     subscription: 189,
//   },
// ];

// export const Projects = [
//   {
//     revenue: 45687,
//     subscription: 240,
//   },
//   {
//     revenue: 49327,
//     subscription: 300,
//   },
//   {
//     revenue: 58585,
//     subscription: 200,
//   },
//   {
//     revenue: 34535,
//     subscription: 278,
//   },
//   {
//     revenue: 14080,
//     subscription: 189,
//   },
//   {
//     revenue: 14011,
//     subscription: 239,
//   },
//   {
//     revenue: 60998,
//     subscription: 278,
//   },
//   {
//     revenue: 48261,
//     subscription: 215,
//   },
// ];

export const DashboardAnalyticsData = {
  AgroTradeData: {
    tradeTitle: "AgroTrade",
    tradeValue: "80,000",
    tradeGrowth: "7.6",
    graphData: [
      {
        revenue: 10400,
        subscription: 240,
      },
      {
        revenue: 14405,
        subscription: 300,
      },
      {
        revenue: 9400,
        subscription: 200,
      },
      {
        revenue: 8200,
        subscription: 278,
      },
      {
        revenue: 7000,
        subscription: 189,
      },
      {
        revenue: 9600,
        subscription: 239,
      },
      {
        revenue: 11244,
        subscription: 278,
      },
      {
        revenue: 26475,
        subscription: 189,
      },
    ],
  },
  Tradesales: {
    tradeTitle: "Tradesales",
    tradeValue: "175,800",
    tradeGrowth: "5.1",
    graphData: [
      {
        revenue: 10441,
        subscription: 240,
      },
      {
        revenue: 69905,
        subscription: 300,
      },
      {
        revenue: 6776,
        subscription: 200,
      },
      {
        revenue: 4343,
        subscription: 278,
      },
      {
        revenue: 65345,
        subscription: 189,
      },
      {
        revenue: 53540,
        subscription: 239,
      },
      {
        revenue: 73653,
        subscription: 278,
      },
      {
        revenue: 69873,
        subscription: 215,
      },
    ],
  },
  Retails: {
    tradeTitle: "Retails",
    tradeValue: "236,867",
    tradeGrowth: "6.5",
    graphData: [
      {
        revenue: 567847,
        subscription: 240,
      },
      {
        revenue: 687496,
        subscription: 300,
      },
      {
        revenue: 258585,
        subscription: 200,
      },
      {
        revenue: 164535,
        subscription: 278,
      },
      {
        revenue: 549990,
        subscription: 189,
      },
      {
        revenue: 334501,
        subscription: 239,
      },
      {
        revenue: 100998,
        subscription: 278,
      },
      {
        revenue: 456861,
        subscription: 189,
      },
    ],
  },
  Projects: {
    tradeTitle: "Projects",
    tradeValue: "806,143",
    tradeGrowth: "1.6",
    graphData: [
      {
        revenue: 10441,
        subscription: 240,
      },
      {
        revenue: 18905,
        subscription: 300,
      },
      {
        revenue: 6666,
        subscription: 200,
      },
      {
        revenue: 4343,
        subscription: 278,
      },
      {
        revenue: 15345,
        subscription: 189,
      },
      {
        revenue: 4414,
        subscription: 239,
      },
      {
        revenue: 33653,
        subscription: 278,
      },
      {
        revenue: 19873,
        subscription: 215,
      },
    ],
  },
};
// =============================================================farmer=================================================================
///////////////////////////////////////////////////////max-price-graph/////////////////////////////////////////////////////////////
export const maxPriceProduct = {
  chartData: [
    { browser: "Potato", products: 275, fill: "var(--color-Potato)" },
    { browser: "Onion", products: 200, fill: "var(--color-Onion)" },
    { browser: "Raddish", products: 187, fill: "var(--color-Raddish)" },
    { browser: "Rui", products: 173, fill: "var(--color-Rui)" },
    { browser: "Beef", products: 90, fill: "var(--color-Beef)" },
  ],
  chartConfig: {
    products: {
      label: "products",
    },
    Potato: {
      label: "Potato",
      color: "hsl(var(--chart-1))",
    },
    Onion: {
      label: "Onion",
      color: "hsl(var(--chart-2))",
    },
    Raddish: {
      label: "Raddish",
      color: "hsl(var(--chart-3))",
    },
    Rui: {
      label: "Rui",
      color: "hsl(var(--chart-4))",
    },
    Beef: {
      label: "Beef",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig,
};
// export const chartData = [
//   { browser: "Potato", products: 275, fill: "var(--color-Potato)" },
//   { browser: "Onion", products: 200, fill: "var(--color-Onion)" },
//   { browser: "Raddish", products: 187, fill: "var(--color-Raddish)" },
//   { browser: "Rui", products: 173, fill: "var(--color-Rui)" },
//   { browser: "Beef", products: 90, fill: "var(--color-Beef)" },
// ]
// export const chartConfig = {
//     products: {
//       label: "products",
//     },
//     Potato: {
//       label: "Potato",
//       color: "hsl(var(--chart-1))",
//     },
//     Onion: {
//       label: "Onion",
//       color: "hsl(var(--chart-2))",
//     },
//     Raddish: {
//       label: "Raddish",
//       color: "hsl(var(--chart-3))",
//     },
//     Rui: {
//       label: "Rui",
//       color: "hsl(var(--chart-4))",
//     },
//     Beef: {
//       label: "Beef",
//       color: "hsl(var(--chart-5))",
//     },
//   } satisfies ChartConfig
///////////////////////////////////////////////Farmers card /////////////////////////////////////////////////////////
export const numberOfFarmers = {
  name: "Farmers",
  number: 831,
  growth: 20,
};
//////////////////////////////////////////////////////////////produce bar graph///////////////////////////////////////////////////

// "use client"
//page: Farmer (Bottom cards)
export const ProduceCellDataFarmer = {
  graph1: {
    title: "Potato",
    chartData: [
      { date: "2024-07-15", produce: 450, sell: 300 },
      { date: "2024-07-16", produce: 380, sell: 420 },
      { date: "2024-07-17", produce: 562, sell: 562 },
      { date: "2024-07-18", produce: 865, sell: 125 },
      { date: "2024-07-19", produce: 125, sell: 451 },
      { date: "2024-07-20", produce: 634, sell: 400 },
    ]
  },
  graph2: {
    title: "Bean",
    chartData: [
      { date: "2024-07-15", produce: 450, sell: 300 },
      { date: "2024-07-16", produce: 451, sell: 562 },
      { date: "2024-07-17", produce: 125, sell: 634 },
      { date: "2024-07-18", produce: 140, sell: 550 },
      { date: "2024-07-19", produce: 564, sell: 451 },
      { date: "2024-07-20", produce: 480, sell: 125 },
    ]
  },
  graph3: {
    title: "Ladies Finger",
    chartData: [
      { date: "2024-07-15", produce: 562, sell: 300 },
      { date: "2024-07-16", produce: 380, sell: 420 },
      { date: "2024-07-17", produce: 634, sell: 50 },
      { date: "2024-07-18", produce: 125, sell: 550 },
      { date: "2024-07-19", produce: 564, sell: 451 },
      { date: "2024-07-20", produce: 480, sell: 562 },
    ],
  },

}

//page: Farmer & trader and wholesales (Bottom cards) config
export const produce_cell_chartConfig = {
  produce: {
    label: "Produce",
    color: "hsl(var(--chart-1))",
  },
  sell: {
    label: "Sell",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

//=========================================================================Trader==============================================================================
// "use client"
//page: Farmer (Bottom cards)
export const ProduceCellDataTrader = {
  graph1: {
    title: "Potato",
    chartData: [
      { date: "2024-07-15", produce: 450, sell: 300 },
      { date: "2024-07-16", produce: 380, sell: 420 },
      { date: "2024-07-17", produce: 562, sell: 562 },
      { date: "2024-07-18", produce: 865, sell: 125 },
      { date: "2024-07-19", produce: 125, sell: 451 },
      { date: "2024-07-20", produce: 634, sell: 400 },
    ]
  },
  graph2: {
    title: "Bean",
    chartData: [
      { date: "2024-07-15", produce: 450, sell: 300 },
      { date: "2024-07-16", produce: 451, sell: 562 },
      { date: "2024-07-17", produce: 125, sell: 634 },
      { date: "2024-07-18", produce: 140, sell: 550 },
      { date: "2024-07-19", produce: 564, sell: 451 },
      { date: "2024-07-20", produce: 480, sell: 125 },
    ]
  },
  graph3: {
    title: "Ladies Finger",
    chartData: [
      { date: "2024-07-15", produce: 562, sell: 300 },
      { date: "2024-07-16", produce: 380, sell: 420 },
      { date: "2024-07-17", produce: 634, sell: 50 },
      { date: "2024-07-18", produce: 125, sell: 550 },
      { date: "2024-07-19", produce: 564, sell: 451 },
      { date: "2024-07-20", produce: 480, sell: 562 },
    ],
  },

}