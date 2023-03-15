import * as React from "react";
import { motion } from "framer-motion";
import { ContainerOption, TextMobile } from "./styles";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ i }) => {
  function clicked(i) {
    if (i === "FERRAMENTAS") {
      window.open("https://pluga.co/ferramentas/", "_blank").focus();
    }
    if (i === "PREÇOS") {
      window.open("https://pluga.co/precos/", "_blank").focus();
    }
    if (i === "SOBRE A PLUGA") {
      window.open("https://pluga.co/trabalhe-conosco/", "_blank").focus();
    }
    if (i === "CONTEÚDO") {
      window.open("https://pluga.co/historias-de-sucesso/", "_blank").focus();
    }
    if (i === "ENTRAR") {
      window.open("https://manage.pluga.co/login", "_blank").focus();
    }
    if (i === "CADASTRAR") {
      window
        .open("https://manage.pluga.co/#/signup?lang=pt_BR", "_blank")
        .focus();
    }
  }

  return (
    <ContainerOption
      as={motion.li}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <TextMobile
        onClick={() => {
          clicked(i);
        }}
      >
        {i}
      </TextMobile>
    </ContainerOption>
  );
};
