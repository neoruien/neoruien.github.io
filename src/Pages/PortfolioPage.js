import React, { useState } from 'react';
import PortfolioFilter from '../components/PortfolioFilter';
import PortfolioMenu from '../components/PortfolioMenu';
import Title from '../components/Title';
import portfolios from '../data/allportfolios';

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
                <PortfolioFilter filter={filter} categories={categories} />
                <PortfolioMenu menuItem={menuItems} />
            </div>
        </div>
    )
}

export default PortfolioPage;
