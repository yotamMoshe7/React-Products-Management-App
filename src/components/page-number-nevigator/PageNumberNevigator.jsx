import React from 'react';
import './PageNumberNevigator.css';
import { NUM_OF_PRODUCTS_IN_PAGE } from '../../utility/Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

export const PageNumberNevigator = ({ page, setPage, filteredProductList }) => {
  const leftPagesNavigateClicked = () => {
    setPage(page - 1);
  };

  const rightPagesNavigateClicked = () => {
    setPage(page + 1);
  };

  return (
    <div className='page-number-wrapper'>
      <div onClick={page > 1 ? leftPagesNavigateClicked : null}>
        <FontAwesomeIcon
          icon={faAngleLeft}
          style={{
            fontSize: '2em',
            color: page > 1 ? 'white' : 'rgb(70, 67, 67)',
            marginRight: '0.5vw',
          }}
        />
      </div>
      <div className='page-number'> {page} </div>

      <div
        onClick={
          page * NUM_OF_PRODUCTS_IN_PAGE < filteredProductList.length
            ? rightPagesNavigateClicked
            : null
        }
      >
        <FontAwesomeIcon
          icon={faAngleRight}
          style={{
            fontSize: '2em',
            color:
              page * NUM_OF_PRODUCTS_IN_PAGE < filteredProductList.length
                ? ' white'
                : 'rgb(70, 67, 67)',
            marginLeft: '0.5vw',
          }}
        />
      </div>
    </div>
  );
};
