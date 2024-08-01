import React from 'react';
import SearchableUserDropdown from '../SearchableUserDropdown';

export default {
    title: "My Companent",
    component: SearchableUserDropdown,
  };

  const Template = (args) => <SearchableUserDropdown {...args} />;

export const DropDown = Template.bind({});
DropDown.args = {
    id:'cmb_1',
    label:'Label',
    isMulti:true,
    isSearchable:true,
    options: [
        { value: 'misbah', label: 'Misbah' },
        { value: 'munir', label: 'munir' },
        { value: 'misibah', label: 'misibah' },
        { value: 'misibibah', label: 'misibibah' },
        { value: 'mumunir', label: 'mumunir' }
  ]
};



   
 