import React from 'react';

import www from '../img/portfolio/www.svg';
import github from '../img/portfolio/github.svg';

function PortfolioMenu({menuItem}) {
    return (
        <div className="PortfolioMenu">
            {
                menuItem.map((item)=>{
                    return (
                        <div className="portfolio" key={item.id}>
                            <div className="image-data">
                                <img src={item.image} alt="" loading="lazy"/>
                            </div>
                            <div className="title">{item.title}</div>
                            <div className="subtitle">{item.projectType}</div>
                            {/* <hr className="solid"/> */}
                            <p className="description">{item.description}</p>
                            <div className="bottom">
                                <div className="left">
                                    <p className="techstack">{item.techStack}</p>
                                    <p className="published">{item.published}</p>
                                </div>
                                <div className="right">
                                    <a className={!item.hasWebsite ? "hidden-link" : ''} href={item.websiteLink} target="_blank" rel="noopener noreferrer">
                                        <img src={www} alt="" width="35rem"/>
                                    </a>
                                    <a className={!item.hasGithub ? "hidden-link" : ''} href={item.githubLink} target="_blank" rel="noopener noreferrer">
                                        <img src={github} alt="" width="35rem"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PortfolioMenu;
