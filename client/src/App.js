import React, { Component } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { CardList } from './components/CardList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <main className="flex-shrink-0">
          <div className="container">
            <Routes>
              <Route path='/' element={ <CardList /> }/>
            </Routes>
          </div>
        </main>

      </BrowserRouter>
    )
  }
}

export default App;