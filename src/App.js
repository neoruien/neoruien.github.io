import "./App.scss";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import PortfliosPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import { useState } from "react";
import { Helmet } from "react-helmet";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const toggleNav = () => {
    setNavToggle(!navToggle);
  };

  const closeNav = () => {
    setNavToggle(false);
  };

  return (
    <div className="App">
      <Helmet defaultTitle="Neo Rui En">
        <meta
          name="description"
          content="I am Rui En and I like developing software."
        />
        <meta
          name="keywords"
          content="Neo Rui En Maybelline, Computer Science, Frontend Development"
        />
      </Helmet>
      <div
        className={`sidebar ${navToggle ? "nav-toggle" : ""}`}
        onClick={closeNav}
      >
        <NavBar />
      </div>
      <div className="nav-btn" onClick={toggleNav}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content" onClick={closeNav}>
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
