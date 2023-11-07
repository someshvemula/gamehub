import usePublishers, { Publisher } from "../hooks/usePublishers";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPublisher: (publisher: Publisher) => void;
  selectedPublisher: Publisher | null;
}
const PublisherSelector = ({ onSelectPublisher, selectedPublisher }: Props) => {
  const { data, error, isLoading } = usePublishers();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPublisher ? selectedPublisher.name : "Publisher"}
      </MenuButton>
      <MenuList>
        {data.map((publisher) => (
          <MenuItem
            key={publisher.id}
            onClick={() => {
              onSelectPublisher(publisher);
            }}
          >
            {publisher.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PublisherSelector;
