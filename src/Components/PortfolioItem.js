import React from 'react';
import {useLocation} from 'react-router-dom';

function PortfolioItem(props) {
  const { state } = useLocation();
  return (
    <div>
      Portfolio Item
      {state.title}
    </div>
  )
}

export default PortfolioItem;
