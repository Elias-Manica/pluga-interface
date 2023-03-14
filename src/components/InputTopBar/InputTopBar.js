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
import { toolInput } from "../../services/api";

export default function InputTopBar() {
  const [isSelect, setIsSelect] = useState(false);
  const [data, setData] = useState([]);

  async function getTools() {
    const response = toolInput();

    setData(response);
    console.log(response, " response");
    return response;
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
        />
        <Icon isSelect={isSelect}>
          <FaSearch />
        </Icon>
        {isSelect && (
          <ContainerTool>
            {data.map((item) => (
              <ViewTool>
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
