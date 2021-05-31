import React from 'react';

function PortfolioMenuItems({menuItem}) {
    return (
        <div className="portfolios">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <div className="image-data"><img src={item.image} alt=""/></div>
                        </a>
                        <h5>{item.title}</h5>
                        <p>{item.projectType}</p>
                    </div>
                })
            }
        </div>
    )
}

export default PortfolioMenuItems;
