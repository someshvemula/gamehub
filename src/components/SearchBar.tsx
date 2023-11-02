import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <FiSearch color="gray.300" />
      </InputLeftElement>
      <Input
        variant={"outline"}
        placeholder="search..."
        borderRadius={10}
        size={"md"}
      />
    </InputGroup>
  );
};

export default SearchBar;
