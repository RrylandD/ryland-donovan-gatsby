import React from "react"
import styled from "styled-components"

import WorkFeatured from './work-featured';

import './work.scss'

const desc= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const Work = () => {
  return (
    <div style={{marginBottom: "2rem"}}>
    	<h2 id="work">Work</h2>
    	<WorkFeatured title='Test Title' other='test' body={desc}/>
    </div>
  )
}

export default Work
