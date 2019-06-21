import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //instantly called to initialize state
  constructor(props) {
    //req
    super(props);
    //this is the only time we do direct assignment to this.state
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (
        position //console.log(position.coords.latitude),
      ) => {
        //call set state to update the state
        this.setState({ lat: position.coords.latitude });
      },
      //failure callback
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  //requirement by React
  //runs frequently
  render() {
    //conditionally render
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>latitude: {this.state.lat}</div>;
    }
    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
