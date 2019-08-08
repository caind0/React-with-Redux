import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  // state = { isSignedIn: null };

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
        //callback after client:auth2 module loads , client.init exec asynch to google api server to initialize our client
        window.gapi.client.init({
          clientId: '574891317304-93o12hd43694of43an03gb521def7lvb.apps.googleusercontent.com',
          scope: 'email'
        }).then(()=>{
          //chain promise from init
          this.auth = window.gapi.auth2.getAuthInstance();

          // this.setState({ isSignedIn: onAuthChange(this.auth.isSignedIn.get() })
          this.onAuthChange(this.auth.isSignedIn.get());
          //event listener to update if a user signs in our signs out
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  //callback for status sign in
  onAuthChange = (isSignedIn) => {
    if(isSignedIn){
      this.props.signIn();
    }else{
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  //helper method to show user signed in
  renderAuthButton(){
      if(this.props.isSignedIn === null){
        return null;
      }else if(this.props.isSignedIn){
        return <button className="ui red google button" onClick={this.onSignOutClick}><i className="google icon" />Sign Out</button>
      }else{
        return <button className="ui green google button" onClick={this.onSignInClick}><i className="google icon"/>Sign In</button>
      }
  }

  render(){
    return <div>{this.renderAuthButton()}</div>
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps,{ signIn, signOut })(GoogleAuth);
