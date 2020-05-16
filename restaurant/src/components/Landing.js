import React from 'react'
import NavBan from './NavBan'
import Cards from './Cards'
import Menu from './Menu'
import Story from './StoryContent'
import '../styles/Cards.css';
import StoryContent from './StoryContent';


export default () => {
  return (
    <div>
      <NavBan />
      <Cards/>
      <Menu/>
      <StoryContent/>
    </div>
  )
}