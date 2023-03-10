import {
  Button,
  Container,
  ContainerLast,
  ContatinerImage,
  Image,
  ImageLast,
  Text,
  TextLast,
  TextLastTool,
  ViewInfos,
  ViewLast,
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
              <Button
                onClick={() => {
                  window.open(linkModal, "_blank").focus();
                }}
              >
                Acessar
              </Button>
            </ViewName>
          </ViewInfos>
          <TextLast>Últimas ferramentas vizualizadas</TextLast>
          <ViewLast>
            <ContainerLast>
              <ContatinerImage colorModal={color}>
                <ImageLast src={imgModal} />
              </ContatinerImage>
              <TextLastTool>{name}</TextLastTool>
            </ContainerLast>
            <ContainerLast>
              <ContatinerImage colorModal={color}>
                <ImageLast src={imgModal} />
              </ContatinerImage>
              <TextLastTool>{name}</TextLastTool>
            </ContainerLast>
            <ContainerLast>
              <ContatinerImage colorModal={color}>
                <ImageLast src={imgModal} />
              </ContatinerImage>
              <TextLastTool>{name}</TextLastTool>
            </ContainerLast>
          </ViewLast>
        </Container>
      </>
    </>
  );
}
