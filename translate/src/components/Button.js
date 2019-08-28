import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends React.Component{

  static contextType = LanguageContext;

  render(){
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return (
      <div>
        <button className="ui primary">{text}</button>
      </div>
    );
  }
}

export default Button;
