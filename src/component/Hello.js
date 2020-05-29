import React from 'react';

const Hello= (props) =>{
    // return(
    //     <div>
    //         <h1>
    //             Hello Ashma!
    //         </h1>
    //     </div>
    // )
        
    return React.createElement(
        'div',
        {id: 'Hello', className:'dummyClass'},
        React.createElement('h1',null,'Hello')
    )
}

export default Hello;