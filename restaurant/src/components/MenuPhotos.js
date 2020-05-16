import React, { useState } from 'react'
import '../styles/MenuPhotos.css';
import photo1 from '../photos/photo1.jpg'

export default () => {

    return (
        <div className="foodPhotos">
            <div className="photosTitle">Food Photos...</div>
            <div
                className="background"
                style={{
                    backgroundImage:
                        'url("https://via.placeholder.com/150")'
                }}>
            </div>
            <div
                className="background"
                style={{
                    backgroundImage:
                        'url("https://via.placeholder.com/150")'
                }}>
            </div>
            <div
                className="background"
                style={{
                    backgroundImage:
                        'url("https://via.placeholder.com/150")'
                }}>
            </div>
            <div
                className="background"
                style={{
                    backgroundImage:
                        'url("https://via.placeholder.com/150")'
                }}>
            </div>
            <div
                className="background"
                style={{
                    backgroundImage:
                        'url("https://via.placeholder.com/150")'
                }}>
            </div>
        
        </div>
    )
}
