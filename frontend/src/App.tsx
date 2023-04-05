import React from 'react';
import './App.css';
import Home from './Home';
import MovieList from './Movies';
import PodcastPage from './Podcasts';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li>
                  <Link to="/" className="nav-item nav-link">
                    <b>Joel Hilton's Movie Collection</b>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav mx-auto"></ul>
              <ul className="navbar-nav ms-auto">
                <li>
                  <Link to="/podcast" className="nav-item nav-link">
                    My Podcasts
                  </Link>
                </li>
                <li>
                  <Link to="/movies" className="nav-item nav-link">
                    Movies
                  </Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/podcast" Component={PodcastPage} />
              <Route path="/movies" Component={MovieList} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
