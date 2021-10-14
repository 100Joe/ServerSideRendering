import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Articles from './pages/Articles';
import Home from './pages/Home';

function App() {
  return (
    <>
      <h1>Server-side Rendering Example</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/articles'>Articles</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/articles'>
          <Articles />
        </Route>
      </Switch>
    </>
  );
}

export default App;
