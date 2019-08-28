import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component{
  renderSubmit(value){
    return value === 'english' ? 'Submit' : 'Voorleggen'
  }
  // static contextType = LanguageContext;

  render(){
    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return (
      <div>
        <ColorContext.Consumer>
          { (color)=>
            <button className={`ui button ${color}`}>
              <LanguageContext.Consumer>
                {(value) => this.renderSubmit(value)}
              </LanguageContext.Consumer>
            </button>
          }
        </ColorContext.Consumer>
      </div>
    );
  }
}

export default Button;
