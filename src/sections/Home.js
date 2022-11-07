import React, { Suspense } from 'react';
import styled from 'styled-components';

const CoverVideo = React.lazy(() => import('../components/CoverVideo'));
const NavBar = React.lazy(() => import('../components/NavBar'));

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
