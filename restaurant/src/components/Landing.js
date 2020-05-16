import React from 'react'
import NavBan from './NavBan'
import Cards from './Cards'
import Menu from './Menu'
import MenuPhotos from './MenuPhotos'
import Story from './StoryContent'
import '../styles/Cards.css';
import StoryContent from './StoryContent';


export default () => {
  return (
    <div>
      <NavBan />
      <MenuPhotos/>
      <Cards/>
      <Menu/>
      <StoryContent/>
    </div>
  )
}