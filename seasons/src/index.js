import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //instantly called to initialize state
  constructor(props) {
    //req
    super(props);
    //this is the only time we do direct assignment to this.state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (
        position //console.log(position.coords.latitude),
      ) => {
        //call set state to update the state
        this.setState({ lat: position.coords.latitude });
      },
      //failure callback
      err => console.log(err)
    );
  }

  //requirement by React
  //runs frequently
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
