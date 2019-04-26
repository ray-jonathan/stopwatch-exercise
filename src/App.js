import React from 'react';
import Stopwatch from './Stopwatch';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tickingTime: [],
      tickTickTick: false
    };
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Stopwatch clickHandler={this._clickedStart} timerBool={this.state.tickTickTick} timerTime={this.state.tickingTime.length} />
        </header>
      </div>
    );
  }

  _clickedStart = async () => {
    if (this.state.tickTickTick){
      await this.setState({
        tickTickTick: false
      })
    }
    else{
      await this.setState({
        tickTickTick: true
      })
    }
    
    if(this.state.tickTickTick){
      setInterval(()=>{
        const newTime = (this.state.tickingTime).concat(["1"])
        this.setState({
          tickingTime: newTime
        })
      }, 1000);
    }
  }

}

export default App;
