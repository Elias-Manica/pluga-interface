import { Container, ContainerTool, Icon, View, ViewTool } from "./styles";

import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function InputTopBar({ list }) {
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
        {isSelect && (
          <ContainerTool>
            <ViewTool>TESTE 1</ViewTool>
            <ViewTool>TESTE 1</ViewTool>
            <ViewTool>TESTE 1</ViewTool>
          </ContainerTool>
        )}
      </View>
    </>
  );
}
