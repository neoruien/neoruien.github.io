import React from 'react';
import Title from '../components/Title';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useLocation, useHistory} from 'react-router-dom';

function PortfolioItem() {
  const { state } = useLocation();
  let history = useHistory();
  return (
    <div>
      <button className="back-button" onClick={() => history.goBack()}>
        <FontAwesomeIcon icon={faArrowLeft}/>
      </button>
      <Title title={state.title} />
      <div className="portfolio-image-container">
        <img src={state.image} alt="" />
      </div>
      <p>{state.caption}</p>
    </div>
  )
}

export default PortfolioItem;
