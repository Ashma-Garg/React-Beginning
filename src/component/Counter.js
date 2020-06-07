import React,{Component} from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment(){
        // this.setState({
        //     count:this.state.count+1
        // },
        // ()=>{
        //     console.log(this.state.count);
        // }
        // )
        // console.log(this.state.count);

        //above code dosnt work for incement five because those all 
        //five statements of increment() in incrementFive() excutes 
        //simultaneously which means each time number  starts incrementing 
        //with 0 and gives final result as 1

        this.setState(prevState=>({
            count:prevState.count+1
        }))
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render(){
        return(
            <div>
                <div>Count-{this.state.count}</div>
                <button onClick={()=>this.increment()}>Increment</button>
                <br></br><button onClick={()=>this.incrementFive()}>Increment Five</button>
            </div>
        )
    }
}

export default Counter;