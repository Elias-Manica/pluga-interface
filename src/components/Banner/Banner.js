import { AnimatePresence, motion } from "framer-motion";

import { Container, IconLeft, IconRight, Logo, Name, View } from "./styles";

import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    // scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

export default function Banner({
  list,
  index,
  setIndex,
  direction,
  setDirection,
}) {
  function nextTool() {
    setDirection(1);
    if (index === list.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevTool() {
    setDirection(-1);
    if (index === 0) {
      setIndex(list.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  return (
    <>
      <AnimatePresence custom={direction}>
        <Container colorBanner={list[index]?.color}>
          <View
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={variants}
            animate={"animate"}
            initial={"initial"}
            exit={"exit"}
            key={list[index].name}
            custom={direction}
            onClick={() => {
              window.open(list[index]?.link, "_blank").focus();
            }}
          >
            <Logo
              src={list[index]?.icon}
              as={motion.img}
              animate={{ y: [-10, -20, -10], opacity: 1, scale: 1 }}
              transition={{
                ease: "linear",
                duration: 3,
                repeat: Infinity,
                opacity: 1,
              }}
            />
            <Name>{list[index]?.name}</Name>
          </View>

          <IconRight onClick={nextTool}>
            <FiArrowRight />
          </IconRight>
          <IconLeft onClick={prevTool}>
            <FiArrowLeft />
          </IconLeft>
        </Container>
      </AnimatePresence>
    </>
  );
}
