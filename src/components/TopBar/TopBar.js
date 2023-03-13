import {
  Button,
  ButtonPluga,
  Container,
  Icon,
  Image,
  Title,
  View,
} from "./styles";

import logo from "../../assets/images/pluga-transparent.png";
import InputTopBar from "../InputTopBar/InputTopBar";

import { FiMenu } from "react-icons/fi";

export default function TopBar({ backColor }) {
  return (
    <>
      <Container backColor={backColor}>
        <View>
          <Image src={logo} />
          <InputTopBar />
          <Title>FERRAMENTAS</Title>
          <Title>PREÇOS</Title>
          <Title>SOBRE A PLUGA</Title>
          <Title>CONTEÚDO</Title>
          <Button>ENTRAR</Button>
          <ButtonPluga>CADASTRAR</ButtonPluga>
          <Icon>
            <FiMenu />
          </Icon>
        </View>
      </Container>
    </>
  );
}
