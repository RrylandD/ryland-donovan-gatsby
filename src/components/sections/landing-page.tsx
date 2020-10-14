import { Link } from "gatsby";
import React from "react"
import styled from "styled-components"

const FullPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

const LandingTitle = styled.h1`
  margin: 0;
  border: 4px solid #de9e48;
  padding: 1rem 2rem;
  font-size: 3rem;
`;

const LandingNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly; 
  a {
    padding: 1rem;
  }
`;

const LandingPage = () => {
  return (
    <FullPage>
      <div>
        <LandingTitle>Ryland Donovan</LandingTitle>
        <LandingNav>
          <a onClick={() => scrollTo('#about')}>About</a>
          <a onClick={() => scrollTo('#work')}>Work</a>
          <a onClick={() => scrollTo('#contact')}>Contact</a>
        </LandingNav>
      </div>
    </FullPage>
  )
}

function scrollTo(id) {
  var element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth", 
      block: "start"
    }); 
  }
}

export default LandingPage
