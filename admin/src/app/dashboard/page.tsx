"use client";
import React from "react";
// import { ComponentsGraph } from "./(_components)/page";
import MaxPriceGraph from "./(_components)/max-price-graph";
import { AnalyticsCard } from "@/components/analytics-card";
import {
  DashboardAnalyticsData,
  maxPriceProduct,
} from "../../../public/Data/data";
import { ComponentsGraph } from "./(_components)/page";

const Dashboard = () => {
  return (
    <div className="pr-4 pl-4">
      {/* <Navbar /> */}
      <h1 className=" text-4xl text-gray-300 font-bold mt-4 mb-4">Dashboard</h1>
      {/* analyticscard start */}
      <div className="flex mt-4 mb-4">
        <AnalyticsCard
          tradeTitle={DashboardAnalyticsData.AgroTradeData.tradeTitle}
          tradeValue={DashboardAnalyticsData.AgroTradeData.tradeValue}
          tradeGrowth={DashboardAnalyticsData.AgroTradeData.tradeGrowth}
          data={DashboardAnalyticsData.AgroTradeData.graphData}
        />
        <AnalyticsCard
          tradeTitle={DashboardAnalyticsData.Tradesales.tradeTitle}
          tradeValue={DashboardAnalyticsData.Tradesales.tradeValue}
          tradeGrowth={DashboardAnalyticsData.Tradesales.tradeGrowth}
          data={DashboardAnalyticsData.AgroTradeData.graphData}
        />
        <AnalyticsCard
          tradeTitle={DashboardAnalyticsData.Retails.tradeTitle}
          tradeValue={DashboardAnalyticsData.Retails.tradeValue}
          tradeGrowth={DashboardAnalyticsData.Retails.tradeGrowth}
          data={DashboardAnalyticsData.Retails.graphData}
        />
        <AnalyticsCard
          tradeTitle={DashboardAnalyticsData.Projects.tradeTitle}
          tradeValue={DashboardAnalyticsData.Projects.tradeValue}
          tradeGrowth={DashboardAnalyticsData.Projects.tradeGrowth}
          data={DashboardAnalyticsData.Projects.graphData}
        />
      </div>
      {/* analyticscard end */}
      {/* Dashboard Heading */}
      <div className="min-h-[100px] w-8/12 p-3  border-solid border-1 border-black-500  mb-4 bg-lime-900 shadow-lg rounded-lg">
        <ComponentsGraph />
      </div>
      <div className="flex gap-5 mb-4">
        <MaxPriceGraph
          chartData={maxPriceProduct.chartData}
          chartConfig={maxPriceProduct.chartConfig}
        />
      </div>
    </div>
  );
};

export default Dashboard;
