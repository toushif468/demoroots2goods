import { AnalyticsCard } from "@/components/analytics-card";
import NumberOfUser from "@/components/number-of-user";
import { ProductSellGraph } from "@/components/produce-sell-graph";
import React from "react";
import {
  DashboardAnalyticsData,
  numberOfWholesalers,
  ProduceCellDataWholesalers,
  produce_cell_chartConfig,
} from "../../../public/Data/data";

const page = () => {
  return (
    <div>
      <h1 className=" text-4xl text-gray-300 font-bold z-0">Traders</h1>
      <div className="flex m-3">
        <AnalyticsCard
          tradeTitle={DashboardAnalyticsData.Retails.tradeTitle}
          tradeValue={DashboardAnalyticsData.Retails.tradeValue}
          tradeGrowth={DashboardAnalyticsData.Retails.tradeGrowth}
          data={DashboardAnalyticsData.Retails.graphData}
        />
        <NumberOfUser
          name={numberOfWholesalers.name}
          number={numberOfWholesalers.number}
          growth={numberOfWholesalers.growth}
        />
      </div>
      <div className="flex">
        <ProductSellGraph
          title={ProduceCellDataWholesalers.graph1.title}
          chartData={ProduceCellDataWholesalers.graph1.chartData}
          chartConfig={produce_cell_chartConfig}
        />
        <ProductSellGraph
          title={ProduceCellDataWholesalers.graph2.title}
          chartData={ProduceCellDataWholesalers.graph2.chartData}
          chartConfig={produce_cell_chartConfig}
        />
        <ProductSellGraph
          title={ProduceCellDataWholesalers.graph3.title}
          chartData={ProduceCellDataWholesalers.graph3.chartData}
          chartConfig={produce_cell_chartConfig}
        />
      </div>
    </div>
  );
};

export default page;
