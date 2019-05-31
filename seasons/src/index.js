import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //instantly called to initialize state
  constructor(props) {
    //req
    super(props);

    this.state = { latitude: null };
  }
  //rquirement by React
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position.coords.latitude),
      //failure callback
      err => console.log(err)
    );

    return <div>Latitude:</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
