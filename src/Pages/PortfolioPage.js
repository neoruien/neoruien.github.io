import React from 'react';
import Categories from '../components/PortfolioCategories';
import PortfolioMenuItems from '../components/PortfolioMenuItems';
import Title from '../components/Title';
import portfolios from '../data/allportfolios';
import { useState } from 'react';

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

function PortfolioPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) =>{
        if (category === 'All'){
            setMenuItems(portfolios)
            return;
        }
        const filteredData = portfolios.filter((item) => {
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <Title title={'My Portfolio'} />
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <PortfolioMenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default PortfolioPage;
