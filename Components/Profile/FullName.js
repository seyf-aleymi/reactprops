import React from 'react';

const fullName = (props) => {
   
    console.log(props);
    
    const myStyle={
        textAlign:"center",
        color:"rgb(9, 30, 90)",
        textTransform: "uppercase",
        fontFamily: 'Roboto Condensed',margin:"auto",
    }
    return (
        <div style ={{color:"black",textAlign:"center"}}>
    <h1 style ={myStyle}>  {props.firstName} {props.lastName}</h1>

    
    {props.children}
        </div>

    );
};

export default fullName;