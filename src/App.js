import './App.scss';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import PortfliosPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import { useState } from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
          <div className="content">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/about">
                <AboutPage />
              </Route>
              <Route exact path="/portfolio">
                <PortfliosPage />
              </Route>
              <Route exact path="/blog">
                <BlogPage />
              </Route>
              <Route exact path="/contact">
                <ContactPage />
              </Route>
            </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;
