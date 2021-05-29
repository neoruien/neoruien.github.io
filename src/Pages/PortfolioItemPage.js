import React from 'react';
import {useLocation} from 'react-router-dom';

function PortfolioItem() {
  const { state } = useLocation();
  return (
    <div>
      Portfolio Item
      {state.title}
      {state.caption}
    </div>
  )
}

export default PortfolioItem;
