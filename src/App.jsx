import React, { useState } from 'react';
import { TopBar } from './components/top-bar/TopBar';
import { ButtonInput } from './components/buttons-input/ButtonInput';
import ProductsList from './components/products-list/ProductsList';
import { SELECT_LAST_ADDED } from './utility/Constants';

function App() {
  const [addButtonClick, setAddButtonClick] = useState(false);
  const [searchField, setSearchField] = useState('');
  const [selectSort, setSelectSort] = useState(SELECT_LAST_ADDED);

  return (
    <div className='app'>
      <TopBar />
      <ButtonInput
        setSearchField={setSearchField}
        setAddButtonClick={setAddButtonClick}
        setSelectSort={setSelectSort}
      />
      <ProductsList
        addButtonClick={addButtonClick}
        setAddButtonClick={setAddButtonClick}
        searchField={searchField}
        selectSort={selectSort}
      />
    </div>
  );
}

export default App;
