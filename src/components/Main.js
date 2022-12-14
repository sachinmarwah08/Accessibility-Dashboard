import React from "react";
import LineChartData from "./Charts/LineChart/LineChart";
import Contries from "./Contries/Contries";
import Footer from "./Layouts/Footer/Footer";
import GlobalWellbeing from "./GlobalWellbeing/GlobalWellbeing";
import Header from "./Layouts/Header/Header";
import NewsAndHashTags from "./NewsAndHashTags/NewsAndHashTags";
import TrendingHashtags from "./TrendingHashtags/TrendingHashtags";
import TopBottomButton from "./TopBottomButton/TopBottomButton";
import DashboardFilter from "./DashboardFilter/DashboardFilter";
import Barometer from "./Barometer/Barometer";

const Main = () => {
  return (
    <>
      <Header />
      <GlobalWellbeing />
      <DashboardFilter />
      <Contries />
      <NewsAndHashTags />
      <TrendingHashtags />
      <LineChartData />
      <Footer />
    </>
  );
};

export default Main;
