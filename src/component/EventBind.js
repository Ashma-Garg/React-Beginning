import React,{Component} from 'react'

class EventBind extends Component{
    constructor(){
        super()
        this.state={
            message:"Hello"
        }

        // third approch//best option
        this.clickHandler=this.clickHandler.bind(this)
    }
    //first second third and invalid approch
    // clickHandler(){
    //     this.setState({
    //         message:"Goodbye"
    //     })
    //     console.log(this)
    // }

    //forth approch
    clickHandler = () =>{
        this.setState({
            message:"Goodbye"
        })
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* first approch */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* second approch */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}

                {/* third approch */}
                {/* <button onClick={this.clickHandler}>Click</button> */}

                {/* forth approch */}
                <button onClick={this.clickHandler}>Click</button>

                {/* invalid approch */}
                {/* <button onClick={this.clickHandler}>Click</button> */}
            </div>
        )
    }
}
export default EventBind;