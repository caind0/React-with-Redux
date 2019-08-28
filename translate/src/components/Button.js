import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component{
  renderSubmit(language){
    return language === 'english' ? 'Submit' : 'Voorleggen'
  }
  // static contextType = LanguageContext;

  renderButton(color){
    return(
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render(){
    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return (
      <div>
        <ColorContext.Consumer>
          { (color)=> this.renderButton(color) }
        </ColorContext.Consumer>
      </div>
    );
  }
}

export default Button;
