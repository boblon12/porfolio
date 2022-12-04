import React, { Suspense } from 'react';
import styled from 'styled-components';

import CoverVideo from '../components/CoverVideo';
import NavBar from '../components/NavBar';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const Home = () => {
  return (
    <Section id="home">
      <Suspense fallback={<></>}>
        <NavBar />
        <CoverVideo />
      </Suspense>
    </Section>
  );
};

export default Home;
