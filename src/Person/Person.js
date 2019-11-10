
import React from 'react';
// import './Person.css';

import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    padding: 16px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;


@media(min-width: 500px){
    .Person{
        widows: 450px;
    }
}
`;


const person = (props) => {
const style ={
    '@media(min-width: 500px': {
        width: '450px'
    }
}

    return(
    // <div className='Person' style={style}>
    <StyledDiv>
    <p onClick={props.click}>I'm {props.name} and {props.age} years old and company <b>{props.company}</b></p>
    <p>{props.children}</p>
    <input type='text' onChange={props.changed}/>
    {/* </div> */}
    </StyledDiv>
    )
}

export default person;