import { Container, Icon, View } from "./styles";

import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { findTool, getData } from "../../services/api";

export default function InputSearch({
  setData,
  setPage,
  page,
  isOpen,
  hasMore,
  setHasMore,
}) {
  const [inputRef, setInputRef] = useState(false);

  async function findToolByName(text) {
    const response = findTool(text);
    setHasMore(false);

    if (response.length >= 66 && page < 7) {
      setPage(2);
      const firstresponse = getData(1);
      setHasMore(true);
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
