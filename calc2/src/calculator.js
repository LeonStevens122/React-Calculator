import React from 'react';
import { Component } from 'react';
import './App.css';
import './index.css';

class Display extends Component {
  render() {
    return (<div className="display">
        <h2>
          {this.props.result}
        </h2>
    </div>)
  }
}

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
          <button onClick={this.props.onClick} className="button ce" value="ce">CE</button>
          <button onClick={this.props.onClick} className="button slash" value="/">/</button>
          <button onClick={this.props.onClick} className="button multi" value="*">x</button>
          <button onClick={this.props.onClick} className="button minus" value="-">-</button>
          <button onClick={this.props.onClick} className="button plus" value="+">+</button>
        </div>
        </div>);
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ''
    }
    
    this.handleClick = this.handleClick.bind(this);
    
  }
    
  handleClick(event) {
    const value = event.target.value;
    let result = this.state.result;
     if (value === 'ce') {
       let stop = result.slice(0, result.length -1);
        this.setState({result: stop});
      } else if (value === "=") {
          let re = eval(result);
          if (re.toString().length >= 15) {
              re = re.toString().substring(0, 9);
              this.setState({result: re});
          } else {
                this.setState({result: re.toString()});
            }
    } else {
      this.setState({result: result + value});
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
