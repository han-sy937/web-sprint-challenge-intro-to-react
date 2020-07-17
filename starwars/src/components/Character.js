// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const Character_card = styled.div`
border-bottom: 3px dotted #ADB7B3;
padding: 1%;
width: 40%;
// height: 10vh;
margin: 0 auto;
font-family: 'Red Rose';
// color: red;
background-color: #FFEDDF;

    h1{
        font-size: 2.8rem;
        color: #D85A56;
    }

    h2{
        font-size: 2.2rem;
        color: #ADB7B3;
    }

    p{
        font-size: 1.8rem;
        color: #1B2230;
    }
`

const Character = (props) => {
    // const {characters} = props;
    console.log(props)

    return(
        <Character_card className="character-card">
        <h1>{props.name}</h1>
        <h2>Gender: {props.gender}</h2>
        <p>Hair: {props.hair}</p>
        </Character_card>
    )
}

export default Character