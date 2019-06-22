import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// const App = () => {
//   return (
//     <div className="ui container" style={{marginTop: '10px'}}>
//     <SearchBar />
//     </div>
//   );
// }
class App extends React.Component{
  async onSearchSubmit(term){
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID b145f41ac0f1205b2fd6b95440b15977dc8ebd18959834f57690a0a40afa71a9'
      }
    });
    //getting response
    // .then((response) => {
    //   console.log(response.data.results);
    // });
    console.log(response.data.results);
  }

  render(){
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
          <SearchBar onSubmit={this.onSearchSubmit}/>
          </div>
    );
  }
}

export default App;
