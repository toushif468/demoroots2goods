import { AnalyticsCard } from "@/components/analytics-card";
import React from "react";
import { DashboardAnalyticsData,numberOfFarmers, produce_cell_chartConfig, ProduceCellDataFarmer} from "../../../public/Data/data";
import NumberOfUser from "@/components/number-of-user";
import { ProductSellGraph } from "@/components/produce-sell-graph";


const Farmers = () => {
  return (
    <div>
      <h1 className=" text-4xl text-gray-300 font-bold z-0">Farmers</h1>
      <div className="flex m-3">
        <AnalyticsCard
          tradeTitle={DashboardAnalyticsData.AgroTradeData.tradeTitle}
          tradeValue={DashboardAnalyticsData.AgroTradeData.tradeValue}
          tradeGrowth={DashboardAnalyticsData.AgroTradeData.tradeGrowth}
          data={DashboardAnalyticsData.AgroTradeData.graphData}
        />
        <NumberOfUser 
        name={numberOfFarmers.name} number={numberOfFarmers.number} growth={numberOfFarmers.growth} />
      </div>
      <div className='flex'>
      <ProductSellGraph title = {ProduceCellDataFarmer.graph1.title} chartData={ProduceCellDataFarmer.graph1.chartData} chartConfig={produce_cell_chartConfig} />
      <ProductSellGraph title = {ProduceCellDataFarmer.graph2.title} chartData={ProduceCellDataFarmer.graph2.chartData} chartConfig={produce_cell_chartConfig} />
      <ProductSellGraph title = {ProduceCellDataFarmer.graph3.title} chartData={ProduceCellDataFarmer.graph3.chartData} chartConfig={produce_cell_chartConfig} />
      </div>

    </div>
  );
};

export default Farmers;
