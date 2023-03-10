import { Container, Icon, View } from "./styles";

import { FaSearch } from "react-icons/fa";

export default function InputSearch() {
  return (
    <>
      <View>
        <Container placeholder="Buscar +80 ferramentas ..." />
        <Icon>
          <FaSearch />
        </Icon>
      </View>
    </>
  );
}
