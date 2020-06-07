import React from 'react'
import Namesformat from './Namesformat'
function NameList(){

    //first approch
    let names=['Ashma','Mansi','Simran']
    // return(
    //     <div>
    //         {
    //             //we put this in curly braces bcoz it 
    //             //is jsx code hich needs to be evaluated.
    //             names.map(name => <div>{name}</div>)
    //         }
    //     </div>
        
    // )

    //second approch
    // let nameList=names.map(name=><h1>{name}</h1>)
    // return <div>{nameList}</div>

    //third approch
    let nameList=names.map((name,index)=> <Namesformat key={index} name={name} num={index}/>)
    return <div>{nameList}</div>
}

export default NameList