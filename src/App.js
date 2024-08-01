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
        label='TEST'
        // className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
