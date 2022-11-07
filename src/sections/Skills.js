import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { useRef } from 'react';

import { motion } from 'framer-motion';

import img1 from '../assets/Images/4.webp';
import img2 from '../assets/Images/5.webp';
import img3 from '../assets/Images/6.webp';
import img4 from '../assets/Images/7.webp';
import img5 from '../assets/Images/8.webp';
import img6 from '../assets/Images/9.webp';
import img7 from '../assets/Images/10.webp';
import img8 from '../assets/Images/11.webp';
import img9 from '../assets/Images/12.webp';

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 50%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  @media (max-width: 360px) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;

const Product = ({ img, title = '' }) => {
  return (
    <Item
      initial={{ filter: 'grayscale(100%)' }}
      whileInView={{ filter: 'grayscale(0%)' }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 'all' }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);
  const width = window.innerWidth;
  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App', // locomotive element
          scrub: true,
          pin: true,
        },
        //increase scrolling height of this section same as the scrolling element width
        height: `${scrollingElement.scrollWidth}px`,
        ease: 'none,',
      });

      // Horizontal Scrolling
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App', // locomotive element
          scrub: true,
        },
        //increase scrolling height of this section same as the scrolling element width
        x: -pinWrapWidth,
        ease: 'none,',
      });
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      //clear instances
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="skills">
      <Title data-scroll data-scroll-speed="-1">
        My Skills
      </Title>
      <Left>
        <p>
          <br />
          <br />
          Front-end:
          {width > 380 ? (
            <ul>
              <li>TypeScript, JavaScript</li>
              <li>NextJS, ReactJS</li>
              <li>Redux, Redux Thunk, RTK, redux - persist</li>
              <li>React Query, RTK Query, Axios</li>
              <li>React Hook Form, React Final Form, Formik</li>
              <li>ESLint, Prettier</li>
              <li>HTML5, CSS/SCSS, CSS Modules, styled-components</li>
              <li> Bootstrap, Tailwind</li>
              <li> Webpack , Vite</li>
              <li>Jest, React Testing Library</li>
            </ul>
          ) : (
            <>
              TypeScript, JavaScript NextJS, ReactJS, Redux, Redux Thunk, RTK,
              redux - persist, React, Query, RTK Query, Axios, React Hook Form,
              React Final Form, Formik, ESLint, Prettier, HTML5, CSS/SCSS, CSS
              Modules, styled-components, Bootstrap, Tailwind, Webpack, Vite,
              Jest, React Testing Library
            </>
          )}
          <br />
          Other skills:
          {width > 380 ? (
            <ul>
              <li> Git/GitHub/Bitbucket</li>
              <li>Jira, Confluence, TeamCity</li>
              <li>WebSockets (socket.io)</li>
              <li>CI/CD (husky, github actions)</li>
            </ul>
          ) : (
            <>
              Git/GitHub/Bitbucket, Jira, Confluence, TeamCity, WebSockets
              (socket.io), CI/CD (husky, github actions)
            </>
          )}
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Product img={img1} />
        <Product img={img2} />
        <Product img={img3} />
        <Product img={img4} />
        <Product img={img5} />
        <Product img={img6} />
        <Product img={img7} />
        <Product img={img8} />
        <Product img={img9} />
      </Right>
    </Section>
  );
};

export default Skills;
