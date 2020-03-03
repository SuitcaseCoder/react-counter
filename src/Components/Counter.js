import React, {Component} from 'react';
import App from '../App';

class Counter extends Component {
    constructor(props){
        super(props);
        //init state
        this.state = {
            count: 0
        }
    }

    increment = () => {
        //create a new object with the new count
        this.setState({count: this.state.count + 1})
    }

    decrement = () => {
        this.setState({ count: this.state.count -1});
    }

    render(){
        return(
            <div className="Counter-comp">
                <button onClick={this.increment} className="counter">+</button>
                <button onClick={this.decrement} className="counter">-</button>
        <h2>{this.state.count}</h2>

            </div>
        )
    }
}

export default Counter;