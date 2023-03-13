import { Container, Icon, View } from "./styles";

import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { findTool, getData } from "../../services/api";

export default function InputSearch({
  data,
  setData,
  setPage,
  page,
  isOpen,
  toggleOpen,
}) {
  const [inputRef, setInputRef] = useState(false);

  async function findToolByName(text) {
    const response = await findTool(text);

    if (response.length >= 66 && page < 7) {
      setPage(2);
      const firstresponse = getData(1);
      setData(firstresponse);
      return;
    }
    setData(response);
  }

  return (
    <>
      <View>
        <Container
          placeholder="Buscar +80 ferramentas..."
          onFocus={() => setInputRef(true)}
          onBlur={() => setInputRef(false)}
          onChange={(e) => {
            findToolByName(e.target.value);
          }}
        />
        <Icon inputRef={inputRef} isOpen={isOpen}>
          <FaSearch />
        </Icon>
      </View>
    </>
  );
}
