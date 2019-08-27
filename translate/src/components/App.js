import React from 'react';

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
        {this.state.language}
      </div>
    );
  }
}

export default App;
