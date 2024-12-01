import { AnalyticsCard } from "@/components/analytics-card";
import NumberOfUser from "@/components/number-of-user";
import { ProductSellGraph } from "@/components/produce-sell-graph";
import React from "react";
import {
  DashboardAnalyticsData,
  numberOfTraders,
  ProduceCellDataFarmer,
  produce_cell_chartConfig,
} from "../../../public/Data/data";

const page = () => {
  return (
    <div>
      <h1 className=" text-4xl text-gray-300 font-bold z-0">Traders</h1>
      <div className="flex m-3">
        <AnalyticsCard
          tradeTitle={DashboardAnalyticsData.Tradesales.tradeTitle}
          tradeValue={DashboardAnalyticsData.Tradesales.tradeValue}
          tradeGrowth={DashboardAnalyticsData.Tradesales.tradeGrowth}
          data={DashboardAnalyticsData.Tradesales.graphData}
        />
        <NumberOfUser
          name={numberOfTraders.name}
          number={numberOfTraders.number}
          growth={numberOfTraders.growth}
        />
      </div>
      <div className="flex">
        <ProductSellGraph
          title={ProduceCellDataFarmer.graph1.title}
          chartData={ProduceCellDataFarmer.graph1.chartData}
          chartConfig={produce_cell_chartConfig}
        />
        <ProductSellGraph
          title={ProduceCellDataFarmer.graph2.title}
          chartData={ProduceCellDataFarmer.graph2.chartData}
          chartConfig={produce_cell_chartConfig}
        />
        <ProductSellGraph
          title={ProduceCellDataFarmer.graph3.title}
          chartData={ProduceCellDataFarmer.graph3.chartData}
          chartConfig={produce_cell_chartConfig}
        />
      </div>
    </div>
  );
};

export default page;
