import React from 'react';
import { Component } from 'react';
import './App.css'

// display component displays the  results of the user input
// displays the result prop recieved from the App component
class Display extends React.Component {
    render() {

    return (<div className="display">
        <h2 ref="Display" >
          {this.props.result}
        </h2>
    </div>)
  }
}


// create individual number buttons to be diplayed, 
// each button element has a onclick event handling and a unique value
// symbol buttons are generated to be uaed for the individual buttons with thier own class based styling
class ButtonsKey extends Component {
  render() {
    return (
      <div className="buttons-key">
        <div className="left">
        <button onClick={this.props.onClick} className="button btnrg seven" value="7">7</button>
        <button onClick={this.props.onClick} className="button btnrg eight" value="8">8</button>
        <button onClick={this.props.onClick} className="button btnrg nine" value="9">9</button>
        <button onClick={this.props.onClick} className="button btnrg four" value="4">4</button>
        <button onClick={this.props.onClick} className="button btnrg five" value="5">5</button>
        <button onClick={this.props.onClick} className="button btnrg six" value="6">6</button>
        <button onClick={this.props.onClick} className="button btnrg one" value="1">1</button>
        <button onClick={this.props.onClick} className="button btnrg two" value="2">2</button>
        <button onClick={this.props.onClick} className="button btnrg three" value="3">3</button>
        <button onClick={this.props.onClick} className="button btnrg zero" value="0">0</button>
        <button onClick={this.props.onClick} className="button btnrg point" value=".">.</button>
        <button onClick={this.props.onClick} className="button btnrg equal" value="=">=</button>
            </div>
            
        <div className="rigth">
          <button onClick={this.props.onClick} className="button ce" value="cls">CLS</button>
          <button onClick={this.props.onClick} className="button slash" value="/">/</button>
          <button onClick={this.props.onClick} className="button multi" value="*">x</button>
          <button onClick={this.props.onClick} className="button minus" value="-">-</button>
          <button onClick={this.props.onClick} className="button plus" value="+">+</button>
        </div>
        </div>);
  }
}


// main app handles events and state 
class App extends Component {
  constructor(props) {
      super(props);
      // clear state on initial render of the element
    this.state = {
      result: ''
    }
    // bind the handleclick event
    this.handleClick = this.handleClick.bind(this);
    
  }
    // handleclick event takes action based on the event target value
    handleClick(event) {
      // set the value to a variable
    const value = event.target.value;
        let result = this.state.result;

        switch (value) {
            case 'cls': {
                // remove one number from display
                let stop = result.slice(0, result.length - 1);
                this.setState({ result: stop });
            }
                break;
            case "=": {
                try {
                    let re = eval(result);
                    if (re.toString().length >= 15) {
                        re = re.toString().substring(0, 9);
                        this.setState({ result: re });
                    } else {
                        this.setState({ result: re.toString() });
                    }
                }
                catch (err) {
                    this.setState({ result: 'Invalid Input' });
                }
                break;

            }
            default: {
                this.setState({ result: result + value });
            }

        }           
           
  }
  
  render() {
    return (
    <div className="container">
        <Display result={this.state.result} />
        <div className="buttons">
            <ButtonsKey onClick={this.handleClick}/>
          </div>
        </div>);
  }
}

export default App;
