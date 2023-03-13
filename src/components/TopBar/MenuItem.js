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

export const MenuItem = ({ i, toggleOpen }) => {
  return (
    <ContainerOption
      as={motion.li}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <TextMobile
        onClick={() => {
          toggleOpen();
        }}
      >
        {i}
      </TextMobile>
    </ContainerOption>
  );
};
