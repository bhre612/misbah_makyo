import React, { useState } from 'react';
import Select from 'react-select';

const SearchableUserDropdown = ({ id, options, isMulti,isSearchable, label }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const handleSelection = selectedOptions => {
    setSelectedUsers(selectedOptions);
  };

  const handleChange = selectedOptions => {
    setSelectedUsers(selectedUsers);
    handleSelection(selectedOptions);
  };

  return (
    <div className="w-full max-w">
        <div className="flex">
          <div className="py-1.5 mx-1">
            <label className="text-right pt-0.5" >
              {label}
            </label>
          </div>
          <div className="w-full max-w ps-1.5">
          <Select
            id={id}
            options={options}
            isMulti={isMulti}
            closeMenuOnSelect={false}
            onChange={handleChange}
            isSearchable={isSearchable}
          />
          </div>
        </div>
      </div>
    
  );
};

export default SearchableUserDropdown;
