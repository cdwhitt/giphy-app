import React from "react";
import { Icon, Input } from "semantic-ui-react";

export const SearchInputContainer = ({
  searchString,
  handleSearchChange,
  handleSearchSubmit,
}) => {
  return (
    <Input
      value={searchString}
      onChange={handleSearchChange}
      fluid
      icon={
        <Icon
          name="search"
          color="green"
          inverted
          circular
          link
          onClick={handleSearchSubmit}
        />
      }
      placeholder="Search for your favorite GIFs!"
    />
  );
};
