import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/gamepedia.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack spacing={4} padding="10px">
      <Image src={logo} alt="Gamepedia" boxSize="60px" objectFit="contain" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
