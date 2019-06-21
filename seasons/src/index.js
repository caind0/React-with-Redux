import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonsDisplay";

class App extends React.Component {
  //another way to initialiaze state ( babel will build constructor etc...)
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
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

  componentDidUpdate() {
    console.log("My component was just updated, it rerendered! ");
  }

  //requirement by React
  //runs frequently
  render() {
    //conditionally render
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
