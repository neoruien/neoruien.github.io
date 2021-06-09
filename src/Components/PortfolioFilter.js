import React from 'react';

function PortfolioFilter({filter, categories}) {
    return (
        <div className="PortfolioFilter">
            {
                categories.map((category, index)=>{
                    return <button
                        type="button"
                        className="category-button"
                        onClick={()=> filter(category)}
                        key={index}
                    >{category}</button>
                })
            }
        </div>
    )
}

export default PortfolioFilter;
