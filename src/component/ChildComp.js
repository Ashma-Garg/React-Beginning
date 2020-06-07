import React from 'react'

function ChildComp(props){
    return(
        <div>
            <button onClick={()=>props.greetHandler('Anshul')}>Click Parent</button>
        </div>
    )
}

export default ChildComp;