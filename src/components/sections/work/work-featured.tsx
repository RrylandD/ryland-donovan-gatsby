import React from "react"
import styled from "styled-components"

import './work.scss'

const Container = styled.div`
  display: grid;
  grid-template-columns:repeat(12, 1fr);
  position: relative;
  align-items: center;
  text-align: left;
  padding: 0 10%;
`;

const Details = styled.div`
  grid-column: 6/-1;
  grid-row: 1;
  z-index:1;
  background: rgb(90,90,90);
  border: 1px solid rgb(32,32,32);
  padding: 1em;
`;

const Image = styled.img`
  grid-column: 1/ span 7;
  grid-row: 1;
  margin:0;
`;

const WorkFeatured = (props) => {
  return (
		<Container>
      {/*project info*/}
      <Details>
      <h3 style={{marginBottom: '0.5em'}}>{props.title}</h3>
        <p style={{marginBottom: '0.5em'}}>{props.other}</p>
        <p style={{margin: '0'}}>{props.body}</p>
      </Details>
      {/*Thumbnail*/}
      <Image src='https://www.marksei.com/wp-content/uploads/2018/06/GitHub-logo.png'/>
		</Container>
  )
}

export default WorkFeatured
