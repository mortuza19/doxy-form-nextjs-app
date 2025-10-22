'use client';
import { useRef, type JSX } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from './components/Common/Header';
import Hero from './components/Landing/Hero';
import ProblemSolutionSectionOnly from './components/Landing/ProblemSolution';
import CoreFeatures from './components/Landing/CoreFeatures';
import HowItWorksSection from './components/Landing/HowItWork';
import Pricing from './components/Landing/Pricing';
import FAQSection from './components/Landing/FAQSection';
import UserReview from './components/Landing/UserReview';
import CTABanner from './components/Landing/CTABanner';
import Footer from './components/Common/Footer';
import DemoSection from './components/Landing/DemoSection';



function Landing(): JSX.Element {
  // Create refs for the elements you want to scroll to
  const featureRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Centralized function to handle scrolling
  function scrollToSection(ref: React.RefObject<HTMLDivElement | null>) {
    ref?.current?.scrollIntoView({
      behavior: 'smooth', // Optional: Adds smooth scrolling
      block: 'start',      // Scrolls to the top of the element
    });
  };
  return (
    <>
      <Header
        scrollToSection={scrollToSection}
        featureRef={featureRef}
        demoRef={demoRef}
        pricingRef={pricingRef}
        contactRef={contactRef}
      />
      <Container role="main" maxWidth="xl" disableGutters>
        <Hero />
        <Container>
          <Box mb={10}>
            <ProblemSolutionSectionOnly />
          </Box>
          <Box my={10}>
            <CoreFeatures />
          </Box>
          <Box my={10}>
            <HowItWorksSection />
          </Box>
          <Box my={10}>
            <DemoSection />
          </Box>
          <Box my={10}>
            <Pricing />
          </Box>
          <Box my={10}>
            <FAQSection />
          </Box>
          <Box my={10}>
            <UserReview />
          </Box>
        </Container>
        <Box mt={8}>
          <CTABanner />
        </Box>
      </Container>
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default Landing;
