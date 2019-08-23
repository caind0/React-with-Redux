import React ,{useState} from 'react';

const App = () => {
  const [resource, setResource] = useState('posts');

    return (
     <div>
       <div>
         <button onClick={() => setResource('posts')}>posts</button>
         <button onClick={() => setResource('todos')}>todos</button>
       </div>
       {resource}
     </div>
   );
}

export default App;
