import React from 'react'
import Cards from './Cards'
import Menu from './Menu'
import Story from './StoryContent'
import '../styles/Cards.css';
import StoryContent from './StoryContent';


export default () => {
  return (
    <div>
      <Cards/>
      <Menu/>
      <StoryContent/>
    </div>
  )
}