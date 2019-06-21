import React from 'react';

//class based component bc using state
class SearchBar extends React.Component {
  //naming convention on_"name of the element"_"event we are watching for"
  onInputChange(event){
    console.log(event.target.value);

  }

  // onInputClick(){
  //     console.log('input was clicked')
  // }

  render(){
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text"
              onChange={this.onInputChange}
              // onClick={this.onInputClick}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;