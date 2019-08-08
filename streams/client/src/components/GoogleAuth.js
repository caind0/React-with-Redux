import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount(){
    window.gapi.load('client:auth2', () => {
        //callback after load
        window.gapi.client.init({
          clientId: '574891317304-93o12hd43694of43an03gb521def7lvb.apps.googleusercontent.com',
          scope: 'email'
        });
    });
  }

  render(){
    return <div>Google Auth</div>
  }
}

export default GoogleAuth;
