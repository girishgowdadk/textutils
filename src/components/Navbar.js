import React from 'react'
import PropTypes from 'prop-types'
// import './src/index.css';
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>

        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div className="d-flex">
            <button className="theme-circle bg-primary" onClick={() => props.toggleMode('primary')}></button>
            <button className="theme-circle bg-danger" onClick={() => props.toggleMode('danger')}></button>
            <button className="theme-circle bg-success" onClick={() => props.toggleMode('success')}></button>
            <button className="theme-circle bg-warning" onClick={() => props.toggleMode('warning')}></button>
            <button className="theme-circle bg-light" onClick={() => props.toggleMode('light')}></button>
            <button className="theme-circle bg-dark" onClick={() => props.toggleMode('dark')}></button>
          </div>
      {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={(e) => props.toggleMode(e.target.checked ? 'dark' : 'light')}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
      </div> */}
      </div>
    </div>
  </nav>
  )
}
 
Navbar.propTypes = {title : PropTypes.string.isRequired}
Navbar.defaultProps = {
    text: 'Hello, world!',
  };
// search react proptypes