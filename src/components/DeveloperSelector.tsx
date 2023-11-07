import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import useDevelopers, { Developer } from "../hooks/useDevelopers";

interface Props {
  onSelectDeveloper: (developer: Developer) => void;
  selectedDeveloper: Developer | null;
}
const DeveloperSelector = ({ onSelectDeveloper, selectedDeveloper }: Props) => {
  const { data, error, isLoading } = useDevelopers();
  if (error) return;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedDeveloper ? selectedDeveloper.name : "Developer"}
      </MenuButton>
      <MenuList>
        {data.map((developer) => (
          <MenuItem
            key={developer.id}
            onClick={() => {
              onSelectDeveloper(developer);
            }}
          >
            {developer.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DeveloperSelector;
