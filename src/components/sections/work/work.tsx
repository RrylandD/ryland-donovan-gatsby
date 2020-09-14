import React from "react"
import styled from "styled-components"

import WorkFeatured from './work-featured';

import './work.scss'

const Work = () => {
  return (
    <>
    	<h2>Work</h2>
    	<WorkFeatured title='Test Title' other='test'/>
    </>
  )
}

export default Work
