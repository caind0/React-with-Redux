import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonsDisplay";
import Spinner from "./spinner";

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

  //helper function to render content
  renderContent(){
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please Accept Location Request"/>
  }

  //requirement by React
  //runs frequently
  render() {
    return <div className="border">{this.renderContent()}</div>

  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
