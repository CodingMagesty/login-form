import React from 'react';
import './App.css';
import Overlay from '../../Components/Overlay/Overlay';
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";
import classNames from 'classnames';

class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          isActive: false,
      }
  }

  toggleActivity = () => {
      this.setState({isActive: !this.state.isActive});
  }

  render() {
      const { isActive } = this.state;

      return (
          <div className={classNames("container", {"right-panel-active": isActive})}>
              <Overlay toggleOverlay={this.toggleActivity}/>
              <SignIn/>
              <SignUp/>
          </div>
      )
  };
}

export default App;
