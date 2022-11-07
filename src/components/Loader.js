import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  touch-action: none;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  svg {
    width: 10vw;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }

  @media (max-width: 48em) {
    svg {
      width: 20vw;
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity,
      ease: 'easeInOut',
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const Loader = () => {
  return (
    <Container
      initial={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: '100%',
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
    >
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="938.000000pt"
        height="1280.000000pt"
        viewBox="0 0 938.000000 1280.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
          fill="#FFF"
          stroke="none"
        >
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M6130 12729 c-832 -530 -1482 -1409 -1771 -2397 -101 -347 -156 -659
-180 -1031 l-12 -178 -61 76 c-130 162 -321 335 -493 444 -118 76 -383 201
-383 182 0 -3 11 -23 24 -44 84 -132 179 -363 226 -545 49 -190 55 -246 55
-481 -1 -189 -4 -234 -23 -322 -64 -297 -216 -600 -438 -878 -196 -245 -360
-405 -814 -799 -451 -392 -512 -446 -692 -613 -633 -588 -1074 -1207 -1321
-1853 -381 -997 -316 -2121 176 -3029 80 -150 232 -377 343 -516 113 -141 328
-356 469 -469 129 -103 405 -288 405 -271 0 2 -13 37 -29 77 -101 257 -187
597 -227 900 -22 168 -30 550 -15 718 50 558 236 1092 545 1560 155 234 338
451 722 855 524 552 743 798 982 1108 46 59 85 107 86 107 2 0 11 -51 21 -112
65 -427 253 -892 525 -1302 258 -389 521 -664 1210 -1267 471 -412 677 -666
783 -965 113 -318 76 -718 -100 -1067 l-44 -89 33 7 c82 17 251 81 349 131
369 192 673 558 810 977 83 251 115 491 106 802 -6 222 -24 353 -82 570 -122
466 -325 880 -674 1380 -73 104 488 -478 719 -745 217 -252 438 -576 576 -845
319 -621 388 -1181 223 -1805 -81 -307 -255 -657 -457 -923 -29 -37 -52 -70
-52 -72 0 -7 126 48 233 101 729 366 1261 1083 1432 1929 47 232 59 362 59
650 0 279 -11 417 -55 675 -117 686 -464 1471 -972 2199 -269 386 -534 720
-1097 1381 -437 513 -594 708 -783 972 -442 618 -705 1282 -808 2040 -30 222
-37 689 -15 928 43 447 147 882 313 1305 30 77 106 245 168 373 63 127 111
232 107 232 -4 -1 -50 -28 -102 -61z"
          />
        </g>
      </svg>
      <Text variants={textVariants} initial="hidden" animate="visible">
        FAERSHTEIN
      </Text>
    </Container>
  );
};

export default Loader;
