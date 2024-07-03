import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Services from './Services';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="top-nav">
          <div className="menu-icon">☰</div>
          <img src="path/to/nyu-logo.png" alt="NYU Logo" className="nyu-logo" /> {}
          <div className="nav-title">NYU High Performance Computing</div>
          <div className="search-icon">🔍</div>
        </div>
        <div className="warning-banner">
          <span>Please do NOT run CPU heavy jobs on login nodes!</span>
          <button className="warning-button">Greene Getting Started</button>
        </div>
        <Switch>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/">
            <div className="container">
              <nav className="sidebar">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="#">Search</a></li>
                  <li><a href="/services">Services</a>
                    <ul>
                      <li><a href="#">HPC Systems</a></li>
                      <li><a href="#">Accessing HPC</a></li>
                      <li><a href="#">Training & Support</a></li>
                      <li><a href="#">HPC Projects</a></li>
                    </ul>
                  </li>
                  <li><a href="#">About</a></li>
                </ul>
              </nav>
              <div className="content">
                <header className="header-content">
                  <h1>High Performance Computing</h1>
                  <p>NYU High Performance Computing (NYU HPC) provides access to state of the art supercomputer hardware and cloud services to eligible faculty and students across all of NYU</p>
                </header>
                <main>
                  <section className="announcements">
                    <h2>Announcements</h2>
                    <div className="announcement-item">
                      <h3>NYU Greene Supercomputer: Celebrating a Year of Excellence</h3>
                      <p>Discover how NYU's Greene Supercomputer has been contributing to research and education in the past year.</p>
                    </div>
                  </section>
                </main>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
