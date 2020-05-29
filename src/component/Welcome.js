import React, {component, Component} from 'react'

class Welcome extends Component{
    render(){
        return(
            <div>
                {/* enclose all upcoming tags in a div tag othewise it will give an error. */}
                <h1>{this.props.name} Components</h1>
                {this.props.children}
            </div>
            
        ) 
    }
}

export default Welcome;