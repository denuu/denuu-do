import React, { Component } from 'react';
import './Assets/css/default.min.css';
// import logo from './logo.svg';
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import HomePage from './Components/pages/homePage';

class App extends Component {
  render() {
    return (
      <div className="App">

          <Header />

            <HomePage />

          <Footer />

      </div>
    );
  }
}

export default App;
