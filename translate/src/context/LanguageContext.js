import React from 'react'

const Context = React.createContext('english');

export class LanguageStore extends React.Component{
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language: language });
  }

  render(){
    return(
      <Context.Provider value={ {...this.state, onLanguageChange} }>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;

//we can now import 2 things from this file
// import LanguageContext
// import { LanguageStore }
