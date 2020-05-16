import React from 'react'
import NavBan from './NavBan'
import Cards from './Cards'
import Menu from './Menu'
import '../styles/Cards.css';

export default () => {
  return (
    <div>
      <NavBan />
      <Cards/>
      <Menu/>
    </div>
  )
}