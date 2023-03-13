import { useRef } from "react";

import {
  Button,
  ButtonPluga,
  Container,
  Icon,
  Image,
  Title,
  View,
  ViewNav,
} from "./styles";

import logo from "../../assets/images/pluga-transparent.png";
import InputTopBar from "../InputTopBar/InputTopBar";

import { motion } from "framer-motion";
import { useDimensions } from "./use-dimension";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";

export default function TopBar({ backColor, isOpen, toggleOpen }) {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

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
            <ViewNav
              as={motion.nav}
              initial={false}
              animate={isOpen ? "open" : "closed"}
              custom={height}
              ref={containerRef}
            >
              <Navigation toggleOpen={toggleOpen} />
              <MenuToggle toggle={() => toggleOpen()} />
            </ViewNav>
          </Icon>
        </View>
      </Container>
    </>
  );
}
