import { Container, ViewOpacity } from "./styles";

import { motion } from "framer-motion";

export default function CardModal({ showModal, setShowModal }) {
  return (
    <>
      <>
        <ViewOpacity
          as={motion.div}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.3,
            },
          }}
          onClick={() => {
            setShowModal(false);
          }}
        ></ViewOpacity>
        <Container
          as={motion.div}
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
            transition: {
              duration: 0.3,
            },
          }}
          exit={{
            scale: 0,
            transition: {
              duration: 0.3,
            },
          }}
        />
      </>
    </>
  );
}
