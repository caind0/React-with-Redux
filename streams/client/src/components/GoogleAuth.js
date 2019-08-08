import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
        //callback after client:auth2 module loads , client.init exec asynch to google api server to initialize our client
        window.gapi.client.init({
          clientId: '574891317304-93o12hd43694of43an03gb521def7lvb.apps.googleusercontent.com',
          scope: 'email'
        }).then(()=>{
          //chain promise from init
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() })
          //event listener to update if a user signs in our signs out
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  //callback for status sign in
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  //helper method to show user signed in
  renderAuthButton(){
      if(this.state.isSignedIn === null){
        return null;
      }else if(this.state.isSignedIn){
        return <button className="ui red google button" onClick={this.onSignOut}><i className="google icon" />Sign Out</button>
      }else{
        return <button className="ui green google button" onClick={this.onSignIn}><i className="google icon"/>Sign In</button>
      }
  }

  render(){
    return <div>{this.renderAuthButton()}</div>
  }
}

export default GoogleAuth;
