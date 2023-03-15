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
          <Image
            src={logo}
            onClick={() => window.open("https://pluga.co/", "_blank").focus()}
          />
          <InputTopBar />
          <Title
            onClick={() =>
              window.open("https://pluga.co/ferramentas/", "_blank").focus()
            }
          >
            FERRAMENTAS
          </Title>
          <Title
            onClick={() =>
              window.open("https://pluga.co/precos/", "_blank").focus()
            }
          >
            PREÇOS
          </Title>
          <Title
            onClick={() =>
              window
                .open("https://pluga.co/trabalhe-conosco/", "_blank")
                .focus()
            }
          >
            SOBRE A PLUGA
          </Title>
          <Title
            onClick={() =>
              window
                .open("https://pluga.co/historias-de-sucesso/", "_blank")
                .focus()
            }
          >
            CONTEÚDO
          </Title>
          <Button
            onClick={() =>
              window.open("https://manage.pluga.co/login", "_blank").focus()
            }
          >
            ENTRAR
          </Button>
          <ButtonPluga
            onClick={() =>
              window
                .open("https://manage.pluga.co/#/signup?lang=pt_BR", "_blank")
                .focus()
            }
          >
            CADASTRAR
          </ButtonPluga>
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
