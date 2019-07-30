import React from 'react';
import './App.css';
import Overlay from '../../Components/Overlay/Overlay';
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";

class App extends React.Component {
  constructor(props) {
      super(props);

      this.containerRef = React.createRef();
  }

  toggleOverlay(left) {
      const container = this.containerRef.current.classList;
      left ? container.add('right-panel-active') : container.remove('right-panel-active');
  }

  render() {
      return (
          <div className="container" ref={ this.containerRef }>
              <Overlay toggleOverlay={(left) => this.toggleOverlay(left)}/>
              <SignIn/>
              <SignUp/>
          </div>
      )
  };
}

export default App;
