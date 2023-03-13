import { Container, Icon, View } from "./styles";

import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function InputTopBar() {
  const [isSelect, setIsSelect] = useState(false);

  return (
    <>
      <View>
        <Container
          placeholder="Buscar +80 ferramentas"
          onFocus={() => setIsSelect(true)}
          onBlur={() => setIsSelect(false)}
        />
        <Icon isSelect={isSelect}>
          <FaSearch />
        </Icon>
      </View>
    </>
  );
}
