import React from "react"
import styled from "styled-components"

import './work.scss'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const WorkFeatured = (props) => {
  return (
		<Container>
			<h3>{props.title}</h3>
			<p>{props.other}</p>
			<p>{props.dne}</p>
		</Container>
  )
}

export default WorkFeatured
