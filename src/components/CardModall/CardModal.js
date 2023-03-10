import {
  Button,
  Container,
  Image,
  Text,
  ViewInfos,
  ViewName,
  ViewOpacity,
} from "./styles";

import { motion } from "framer-motion";

export default function CardModal({
  setShowModal,
  name,
  imgModal,
  linkModal,
  color,
}) {
  const variants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const variantsModal = {
    open: {
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      scale: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <>
        <ViewOpacity
          as={motion.div}
          initial={{
            opacity: 0,
          }}
          variants={variants}
          animate={"open"}
          exit={"closed"}
          onClick={() => {
            setShowModal(false);
          }}
        />
        <Container
          as={motion.div}
          initial={{
            scale: 0,
          }}
          variants={variantsModal}
          animate={"open"}
          exit={"closed"}
        >
          <ViewInfos colorModal={color}>
            <Image src={imgModal} />
            <ViewName>
              <Text>{name}</Text>
              <Button>Acessar</Button>
            </ViewName>
          </ViewInfos>
        </Container>
      </>
    </>
  );
}
