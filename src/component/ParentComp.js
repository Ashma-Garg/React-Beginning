import React,{Component} from 'react'
import ChildComp from './ChildComp'

class ParentCopm extends Component{
    constructor(){
        super()
        this.state={
            parent: "Maya"
        }
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(childName){
        alert(`hello ${this.state.parent} from ${childName}`)
    }
    render(){
        return(
            <ChildComp greetHandler={this.greetParent}/>
        )
    }
}

export default ParentCopm;