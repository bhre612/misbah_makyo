import React, { useState } from 'react';
import Select from 'react-select';

const SearchableUserDropdown = ({ id, options, isMulti,isSearchable, label }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  // const [selectedUsers, setSelectedUsers] = useState([]); 
  const handleSelection = selectedOptions => {
    setSelectedUsers(selectedOptions);
  };

  const handleChange = selectedOptions => {
    setSelectedUsers(selectedUsers);
    handleSelection(selectedOptions);
  };

//   const customStyles = {
//     control: (base, state) => ({
//       ...base,
//       border: state.isFocused ? '2px solid #000' : '1px solid #ccc', // example of custom border
//       boxShadow: state.isFocused ? null : null,
//       '&:hover': {
//         border: state.isFocused ? '2px solid #000' : '1px solid #ccc' // example of custom border
//       }
//     })
//   };

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
            //styles={customStyles}
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
