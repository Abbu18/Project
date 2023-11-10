import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="py-5">
    <div className="row">
      <div className="col-2">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Services</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Reviews</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Contact Us</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
        </ul>
      </div>

      <div className="col-2">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Services</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Reviews</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Contact Us</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
        </ul>
      </div>

      <div className="col-2">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Services</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Reviews</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Contact Us</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
        </ul>
      </div>

      <div className="col-4 offset-1">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" fdprocessedid="jhoa9b"></input>
            <button className="btn btn-primary" type="button" fdprocessedid="e8th7a">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

  </footer>
    </div>
  )
}

export default Footer;