import React from 'react';
import Title from '../components/Title';
import {useLocation, useHistory} from 'react-router-dom';

function PortfolioItem() {
  const { state } = useLocation();
  let history = useHistory();
  return (
    <div>
      <button onClick={() => history.goBack()}>Back</button>
      <Title title={state.title} />
    </div>
  )
}

export default PortfolioItem;
