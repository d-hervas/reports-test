import React, { Component } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>

        <main className="flex-shrink-0">
          <div className="container">
            <Routes>
            </Routes>
          </div>
        </main>

        <Footer/>
      </BrowserRouter>
    )
  }
}

export default App;