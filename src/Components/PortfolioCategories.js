import React from 'react';

function Categories({filter, categories}) {
    return (
        <div className="categories-buttons">
            {
                categories.map((category, index)=>{
                    return <button
                        type="button"
                        className="categories-button-port"
                        onClick={()=> filter(category)}
                        key={index}
                    >{category}</button>
                })
            }
        </div>
    )
}

export default Categories;
