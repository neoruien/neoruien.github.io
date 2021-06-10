import React from 'react';

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
                            <hr className="solid"/>
                            <p>Published: {item.published}</p>
                            <p>Tech stack: {item.techStack}</p>
                            <p className={!item.hasGithub ? "hidden-link" : ''}>
                                <span>GitHub repo: </span>
                                <a className="link" href={item.githubLink} target="_blank" rel="noopener noreferrer">link</a>
                            </p>
                            <p className={!item.hasWebsite ? "hidden-link" : ''}>
                                <text>Deployed website: </text>
                                <a className="link" href={item.websiteLink} target="_blank" rel="noopener noreferrer">link</a>
                            </p>
                            {!item.hasGithub ? <p>&zwnj;</p> : ''}
                            {!item.hasWebsite ? <p>&zwnj;</p> : ''}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PortfolioMenu;
