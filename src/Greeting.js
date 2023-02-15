import React from "react";

export const Greeting = (props) => {
    console.log(props)
    return (
        <>
            <h1>Hello {props.name} ! ! !</h1>
            <h2>{props.name}'s favorite number is {props.favoriteNumber}</h2>
            <h3>{props.name}'s favorite number plus 10 is {props.favoriteNumber + 10}</h3>
            <h3>{props.name}'s favorite colors are: 
                <ul>
                    {props.favoriteColors && props.favoriteColors.map(color => <li key={color}>{color}</li>)}
                </ul>
            </h3>
        </>
    );
};
