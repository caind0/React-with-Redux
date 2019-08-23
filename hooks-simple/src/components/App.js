import React from 'react';

class App extends React.Component {
  state = { resource: 'posts' };

  render(){
    return (
     <div>
       <div>
         <button onClick={() => this.setState({resource: 'posts'})}>posts</button>
         <button onClick={() => this.setState({resource: 'todos'})}>todos</button>
       </div>
       {this.state.resource}
     </div>
   );
  }
}

export default App;
