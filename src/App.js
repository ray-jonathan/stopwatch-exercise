import React from 'react';
import Stopwatch from './Stopwatch';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tickingTime: 0,
      tickTickTick: false
    };
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Stopwatch clickHandler={this._clickedButton} timerBool={this.state.tickTickTick} timerTime={this.state.tickingTime} />
        </header>
      </div>
    );
  }

  _clickedButton = async () => {
    if (this.state.tickTickTick){
      await this.setState({
        tickTickTick: false
      })
      clearInterval(this.interval)
    }
    else{
      await this.setState({
        tickTickTick: true
      })
    }
    if(this.state.tickTickTick){
      this.interval = setInterval(()=>{
        this.setState({
          tickingTime: this.state.tickingTime +1
        })
      }, 10);
    }
  }

}

export default App;
