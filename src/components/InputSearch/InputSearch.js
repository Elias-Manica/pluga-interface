import { Container, Icon, View } from "./styles";

import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function InputSearch() {
  const [inputRef, setInputRef] = useState(false);
  return (
    <>
      <View>
        <Container
          placeholder="Buscar +80 ferramentas..."
          onFocus={() => setInputRef(true)}
          onBlur={() => setInputRef(false)}
        />
        <Icon inputRef={inputRef}>
          <FaSearch />
        </Icon>
      </View>
    </>
  );
}
