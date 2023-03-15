export const variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const variantsModal = {
  open: {
    scale: 1,
  },
  closed: {
    scale: 0,
    transition: {
      delay: 0.3,
    },
  },
};

export const imageVariant = {
  open: {
    opacity: 1,
    x: "0vw",
    transition: {
      ease: "linear",
      duration: 3,
      repeat: Infinity,
    },
    y: [-10, -20, -10],
  },
  closed: {
    opacity: 0,
    x: "-3vw",
  },
};

export const infoVariant = {
  open: {
    opacity: 1,
    x: "0vw",
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    x: "3vw",
  },
};

export const firstToolVariant = {
  open: {
    opacity: 1,
    y: "0vh",
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    y: "3vh",
    transition: {
      duration: 0.3,
    },
  },
};

export const secondToolVariant = {
  open: {
    opacity: 1,
    y: "0vh",
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    opacity: 0,
    y: "3vh",
    transition: {
      duration: 0.3,
    },
  },
};

export const tirthToolVariant = {
  open: {
    opacity: 1,
    y: "0vh",
    transition: {
      duration: 0.7,
    },
  },
  closed: {
    opacity: 0,
    y: "3vh",
    transition: {
      duration: 0.3,
    },
  },
};
