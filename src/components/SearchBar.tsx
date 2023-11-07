import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { FiSearch } from "react-icons/fi";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchBar = ({ onSearch }: Props) => {
  const searchTextRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchTextRef.current) onSearch(searchTextRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FiSearch color="gray.300" />
        </InputLeftElement>
        <Input
          ref={searchTextRef}
          variant={"outline"}
          placeholder="search..."
          borderRadius={10}
          size={"md"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
