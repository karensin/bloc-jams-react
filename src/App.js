import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Album from './components/Album';
import Landing from './components/Landing';
import Library from './components/Library';
 import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>

          <button type="button" class="btn btn-outline-success   btn-lg  float-left">
             <Link to='/'>Home</Link>
            </button>
           <button type="button" class="btn btn-outline-success btn-lg  float-right">
            <Link to='/library'>Library</Link>
            </button>

         </nav>
         <h1 className= "pageName">  ♩ ♪ ♫ ♩ ♪ ♫ ♬ ♭ ♮ ♯  ♭ ♮ ♬ ♯</h1>

         </header>

        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
         </main>
      </div>
    );
  }
}

export default App;
