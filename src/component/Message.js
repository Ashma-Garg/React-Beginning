// state can changes within the component but props cannnot be

import React, {Component} from 'react';

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome Visitor!',
            button:'Subscribe'
        }
    }
    changeMessage(){
        this.setState({
            message: "Thank you for subscribing!",
            button:'UnSubscribe'
        })
    }
    render(){
        return(
        <div>
            <h1>{this.state.message}</h1>
            <button  onClick={() => this.changeMessage()}>{this.state.button}</button>
        </div>
        )

    }

}

export default Message;