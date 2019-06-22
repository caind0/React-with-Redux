import React from 'react';

//class based component bc using state
class SearchBar extends React.Component {
  state = { term: ''};

  //naming convention on_"name of the element"_"event we are watching for"
  // onInputChange(event){
  //   console.log(event.target.value);
  //
  // }

  // onInputClick(){
  //     console.log('input was clicked')
  // }

  //prevent user from entering enter and reloading page
  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
  }

  render(){
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text"
              // onChange={(this.onInputChange)}
              // onChange={(e) => console.log(e.target.value)}
              // onClick={this.onInputClick}
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
