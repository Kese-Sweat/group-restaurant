import React from 'react';



function Cards (){



return(

<div>
    <ul className="cardsList">
        <li className="cardsContent">
            <h1 className="cardHeader">Latest News</h1>
            <span className="cardTitle">Lorem ipsum sit amet</span><br></br>
            <p className="cardsParagraph">Lorem ipum sit amet, .................
                ..................................
                ............. Lorem ipum sit amet, .................
                ..................................
                .............
                Lorem ipum sit amet, .................
                ..................................
                .............Lorem ipum sit amet, .................
                ..................................
                .............
            </p>
            
            
        </li>
        <li className="cardsContent">
            
            <h1 className="cardHeader">Today's Special</h1> 
            <img className="steakImg" src="https://images.unsplash.com/photo-1432835305417-6919779246b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
            <img className="todaysImg" ></img>
            <span className="cardTitle">lorem sum................60</span>
            <p className="cardsParagraph"> Lorem ipum sit amet, .................
                ..................................
            </p>
            
        </li>
        <li className="cardsContent">
            <h1 className="cardHeader">Our Location</h1>
            <span className="cardTitle">idk how to do this shit</span>
            
        </li>

    </ul>
</div>
)


}



export default Cards