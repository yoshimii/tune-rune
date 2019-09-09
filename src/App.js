import React from 'react';
import './App.css';
import tracks from './data';

class App extends React.Component {
constructor() {
  super();
  this.state = {
    trackList: tracks,
    selectedTrack: null,
  }
}
  render() {

   return(
   <div className="App">
      <header className="App-header">
        <h1>Tune Rune</h1>
        <audio />
      </header>
    </div>
   )};
}

export default App;
