import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

const PageOne = () => {
  return <div>Page One</div>;
};

const PageTwo = () => {
  return (
    <div>
        <button>Click Me</button>
        { /* //we dont use anchor tags in our react router because the browser will make a brand
        //new request to an outside server and return a brand new html document and show it
        //on the screen during that process all js data will get dumped.
        //BAD
        // <a href="/">Navigate to Page One</a> replace with Link tag from react-router-dom */}
        <Link to="/"> Navigate to page One</Link>
    </div>
  );
};
const PageThree = () => {
  return (
    <button>Page Three</button>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
        <Route path="/pagetwo/5" component={PageThree} />
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
