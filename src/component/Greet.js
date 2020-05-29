import React from 'react';

//stateless function without render
function Greet(props){
    return(
        <div>
            <h1>Hi {props.name} aka {props.heroName}</h1>
            {props.children}
        </div>
    );
}

export default Greet;
//  second way
// const Greet = () => <h1>Hello Ashma </h1>
//export default Greet;

// third way {Greet} in app.js