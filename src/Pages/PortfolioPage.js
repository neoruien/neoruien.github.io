import React, { useState } from "react";
import PortfolioFilter from "../components/PortfolioFilter";
import PortfolioMenu from "../components/PortfolioMenu";
import Title from "../components/Title";
import allPortfolios from "../data/allPortfolios";
import { Helmet } from "react-helmet";

const allCategories = [
  "All",
  ...new Set(allPortfolios.map((item) => item.category)),
];

function PortfolioPage() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(allPortfolios);

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(allPortfolios);
      return;
    }
    const filteredData = allPortfolios.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredData);
  };

  return (
    <div>
      <Helmet title="Portfolio" />
      <Title title={"My Portfolio"} />
      <PortfolioFilter filter={filter} categories={categories} />
      <PortfolioMenu menuItem={menuItems} />
    </div>
  );
}

export default PortfolioPage;
