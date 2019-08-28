import React from 'react';
import UserCreate from './UserCreate';
// import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from './LanguageSelector'
import { LanguageStore } from '../context/LanguageContext'

class App extends React.Component{

    // state = { language: 'english'};

    // onLanguageChange = (language) => {
    //   this.setState({
    //     language: language
    //   })
    // }

  render(){
    return(
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
