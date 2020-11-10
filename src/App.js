import {BrowserRouter as Router} from 'react-router-dom'
import React, { Component } from 'react';
import Header from './components/Header'
import Section from './components/Section'
import {DataProvider} from './components/Context'


export default class App extends Component {
  render() {
    return (
      <DataProvider>
      <div className="app">
        <Router>
          <Header/>
          <Section/>
        </Router>
      </div>
      </DataProvider>
    );
  }
}
