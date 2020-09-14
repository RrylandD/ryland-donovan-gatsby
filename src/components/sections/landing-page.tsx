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

const LandingPage = () => {
  return (
    <FullPage>
        <h1>Ryland Donovan</h1>
    </FullPage>
  )
}

export default LandingPage
