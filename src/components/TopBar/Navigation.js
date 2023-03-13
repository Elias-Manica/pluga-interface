import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { ViewOption } from "./styles";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <ViewOption as={motion.ul} variants={variants}>
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </ViewOption>
);

const itemIds = [
  "FERRAMENTAS",
  "PREÇOS",
  "SOBRE A PLUGA",
  "CONTEÚDO",
  "ENTRAR",
  "CADASTRAR",
];
