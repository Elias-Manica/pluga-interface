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
  ViewLastInfos,
  ViewName,
  ViewOpacity,
} from "./styles";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CardModal({
  setShowModal,
  name,
  imgModal,
  linkModal,
  color,
}) {
  const [firstWatch, setFirstWatch] = useState({});
  const [secondWatch, setSecondWatch] = useState({});
  const [tirthWatch, setTirthWatch] = useState({});

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

  useEffect(() => {
    const pluga1 = localStorage.getItem("pluga1");
    if (pluga1) {
      setFirstWatch(pluga1);
    }
    const pluga2 = localStorage.getItem("pluga2");
    if (pluga2) {
      setSecondWatch(pluga2);
    }
    const pluga3 = localStorage.getItem("pluga3");
    if (pluga3) {
      setTirthWatch(pluga3);
    }
  }, []);

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
          <ViewInfos
            colorModal={color}
            firstWatch={Object.keys(firstWatch).length === 0 ? true : false}
          >
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
          <ViewLastInfos
            firstWatch={Object.keys(firstWatch).length === 0 ? true : false}
          >
            <TextLast>Últimas ferramentas vizualizadas</TextLast>
            <ViewLast>
              {Object.keys(firstWatch).length > 0 && (
                <ContainerLast
                  onClick={() =>
                    window.open(JSON.parse(firstWatch).link, "_blank").focus()
                  }
                >
                  <ContatinerImage colorModal={JSON.parse(firstWatch).color}>
                    <ImageLast src={JSON.parse(firstWatch).icon} />
                  </ContatinerImage>
                  <TextLastTool>{JSON.parse(firstWatch).name}</TextLastTool>
                </ContainerLast>
              )}
              {Object.keys(secondWatch).length > 0 && (
                <ContainerLast
                  onClick={() =>
                    window.open(JSON.parse(secondWatch).link, "_blank").focus()
                  }
                >
                  <ContatinerImage colorModal={JSON.parse(secondWatch).color}>
                    <ImageLast src={JSON.parse(secondWatch).icon} />
                  </ContatinerImage>
                  <TextLastTool>{JSON.parse(secondWatch).name}</TextLastTool>
                </ContainerLast>
              )}
              {Object.keys(tirthWatch).length > 0 && (
                <ContainerLast
                  onClick={() =>
                    window.open(JSON.parse(tirthWatch).link, "_blank").focus()
                  }
                >
                  <ContatinerImage colorModal={JSON.parse(tirthWatch).color}>
                    <ImageLast src={JSON.parse(tirthWatch).icon} />
                  </ContatinerImage>
                  <TextLastTool>{JSON.parse(tirthWatch).name}</TextLastTool>
                </ContainerLast>
              )}
            </ViewLast>
          </ViewLastInfos>
        </Container>
      </>
    </>
  );
}
