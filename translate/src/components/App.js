import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class App extends React.Component{

    state = { language: 'english'};

    handleChange(language){
      this.setState({
        language: language
      })
    }

  render(){
    return(
      <div className="ui container">
        <div>
          Select a Language:
          <i className="flag us" onClick={()=>this.handleChange('english')}/>
          <i className="flag nl" onClick={()=>this.handleChange('dutch')}/>
        </div>
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
