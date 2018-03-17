import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

// Components
// import logo from './logo.svg';
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import HomePage from './Components/pages/homePage';
import AboutPage from './Components/pages/aboutPage';
import ProjectsPage from './Components/pages/projectsPage';

// Includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">

                <Header />

                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/aboutPage' component={AboutPage} />
                  <Route exact path='/projectsPage' component={ProjectsPage} />

                <Footer />

            </div>
        </Router>
    );
  }
}

export default App;
