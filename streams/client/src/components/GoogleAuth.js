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
        });
    });
  }
  //helper method to show user signed in
  renderAuthButton(){
      if(this.state.isSignedIn === null){
        return <div>I dont know if we are signed in </div>
      }else if(this.state.isSignedIn){
        return <div>I am signed in</div>
      }else{
        return <div>I am not signed in</div>
      }
  }

  render(){
    return <div>{this.renderAuthButton()}</div>
  }
}

export default GoogleAuth;
