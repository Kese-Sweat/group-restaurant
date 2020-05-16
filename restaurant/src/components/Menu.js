import React, { useState } from 'react'
import '../styles/Menu.css'
import StoryContent from './StoryContent'


export default () => {
    const [ tab, setTab ] = useState('Our Story')
    
    return (
        <div>
            <ul className="menu1">
                <li onClick={() => setTab('Our Story')} className={tab === 'Our Story' ? 'active' : '' }>Our Story</li>
                <li onClick={() => setTab('menuTab')} className={tab === 'menuTab' ? 'active' : '' }>Menu</li>
                <li onClick={() => setTab('reservations')} className={tab === 'reservations' ? 'active' : '' }>Reservations</li>
            </ul>
            { tab === 'Our Story' ? <div><StoryContent/></div>: ''}
            { tab === 'menuTab' ? <div>b</div>: ''}
            { tab === 'reservations' ? <div>c</div>: ''}
            
        </div>
    )
}