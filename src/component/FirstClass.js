import React, {Component} from "react";

class FirstClass extends Component{
    constructor(){
        super()
        console.log("Constructor called")
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        console.log("Hey I am mounted")
    }
    clickHandler = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }
    componentDidUpdate = () =>{
        console.log("Update : ", this.state.count)
    }
    render(){
        console.log("Hello Render()")
        return(
            <div>FirstClass
                <button onClick={this.clickHandler}>Click here</button>
            </div>
        )
    }
}

export default FirstClass