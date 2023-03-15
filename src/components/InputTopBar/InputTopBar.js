import {
  BackIcon,
  Container,
  ContainerTool,
  Icon,
  ImageTool,
  TextIcon,
  View,
  ViewTool,
} from "./styles";

import { FaSearch } from "react-icons/fa";

import { useEffect, useState } from "react";

import { findTool, toolInput } from "../../services/api";

export default function InputTopBar() {
  const [isSelect, setIsSelect] = useState(false);
  const [data, setData] = useState([]);

  async function getTools() {
    const response = toolInput();

    setData(response);
    return response;
  }

  async function findToolByName(text) {
    const response = await findTool(text);

    if (text === "") {
      getTools();
      return;
    }

    setData(response.splice(0, 4));
  }

  useEffect(() => {
    getTools();
  }, []);

  return (
    <>
      <View>
        <Container
          placeholder="Buscar +80 ferramentas"
          onFocus={() => setIsSelect(true)}
          onBlur={() => setIsSelect(false)}
          onChange={(e) => {
            findToolByName(e.target.value);
          }}
        />
        <Icon isSelect={isSelect}>
          <FaSearch />
        </Icon>
        {isSelect && (
          <ContainerTool>
            {data.map((item) => (
              <ViewTool
                key={item.app_id}
                onMouseDown={() => {
                  window.open(item.link, "_blank").focus();
                }}
              >
                <BackIcon backColor={item.color}>
                  <ImageTool src={item.icon} />
                </BackIcon>
                <TextIcon>{item.name}</TextIcon>
              </ViewTool>
            ))}
          </ContainerTool>
        )}
      </View>
    </>
  );
}
