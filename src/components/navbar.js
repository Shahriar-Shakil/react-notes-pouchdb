import React, {Component} from "react";
import {Link} from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      //   <nav className="navbar">
      //     <h1>
      //       <Link to="/">ReactNotes</Link>
      //     </h1>
      //     <div className="navbar-buttons">
      // <Link to="/new" className="btn">
      //   New Note
      // </Link>
      //     </div>
      //   </nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          ReactNotes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/new" className="btn btn-success">
                New Note
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
