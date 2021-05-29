import React from 'react';
import {NavLink} from 'react-router-dom';

function MenuItems({menuItem}) {
    return (
        <div className="portfolios">
            {
                menuItem.map((item)=>{
                    return <NavLink to={{
                        pathname: "/portfolio/" + item.id,
                        state: {
                            title: item.title,
                            caption: item.caption
                        }
                    }} activeClassName="active" style={{ textDecoration: 'none' }}>
                        <div className="portfolio" key={item.id}>
                            <div className="image-data">
                                <img src={item.image} alt=""/>
                            </div>
                            <h5>
                                {item.title}
                            </h5>
                            <p>
                                {item.caption}
                            </p>
                            {/* <PortfolioPage /> */}
                        </div>
                    </NavLink>
                })
            }
        </div>
    )
}

export default MenuItems;
