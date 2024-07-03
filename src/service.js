import React from 'react';
import './Services.css';

function Services() {
  return (
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
          <h1>Services</h1>
        </header>
        <main>
          <section className="services">
            <h2>Compute</h2>
            <p>Available High Performance Computing Clusters:</p>
            <ul>
              <li><a href="#">Greene</a></li>
            </ul>

            <h2>Storage & Data Management</h2>
            <ul>
              <li><a href="#">Research Project Space</a></li>
              <li><a href="#">Globus</a></li>
              <li><a href="#">REDCap</a></li>
              <li><a href="#">Secure Research Data Environment (SRDE)</a></li>
            </ul>

            <h2>Supported Research Initiatives</h2>
            <ul>
              <li><a href="#">REDCap</a></li>
              <li><a href="#">Secure Research Data Environment (SRDE)</a></li>
              <li><a href="#">High Speed Research Network</a></li>
            </ul>

            <h2>Support & Research Consultation</h2>
            <ul>
              <li><a href="#">Support Page</a></li>
            </ul>

            <h2>Cloud Computing</h2>
            <ul>
              <li><a href="#">Cloud Computing</a></li>
            </ul>

            <h2>Resources for Classes</h2>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Services;
