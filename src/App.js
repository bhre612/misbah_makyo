import React from 'react';
import SearchableUserDropdown from './SearchableUserDropdown';
import './App.css';

const users = [
  { value: 'misbah', label: 'Misbah' },
  { value: 'munir', label: 'munir' },
  { value: 'misibah', label: 'misibah' },
  { value: 'misibibah', label: 'misibibah' },
  { value: 'mumunir', label: 'mumunir' }
];

const App=()=> {
  const isMultiselect = (true)
  const isSearchable = (true)

  return (  
    <div className='App'>
      <SearchableUserDropdown 
        id='id1'
        label='Dropdown'
        options={users} 
        isSearchable={isSearchable}
        isMulti={isMultiselect}
      />
    <div>
  </div>
      
</div>
  );
}

export default App;
