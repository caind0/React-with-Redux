import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends React.Component{
  renderSubmit(value){
    return value === 'english' ? 'Submit' : 'Voorleggen'
  }
  // static contextType = LanguageContext;

  render(){
    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return (
      <div>
        <button className="ui primary">
          <LanguageContext.Consumer>
            {(value) => this.renderSubmit(value)}
          </LanguageContext.Consumer>
        </button>
      </div>
    );
  }
}

export default Button;
