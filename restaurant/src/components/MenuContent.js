import React, { useState, useEffect } from "react"
import axios from 'axios'


function MenuContent () {
    const [categories, setCategories] = useState({appetizers:[]})


    useEffect(() =>{
        axios.get('https://obscure-tundra-54269.herokuapp.com/fine-dining').then(resp =>{
            setCategories(resp.data)
            console.log(resp.data)

        })



    },[])

    return(<div>
        {categories.appetizers.map(item =>{
            return <li>{item.name}</li>

        })}
       


    </div>


    )
}

export default MenuContent

// categories
// price

// description




