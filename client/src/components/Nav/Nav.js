// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./Nav.css";

// class Nav extends Component {
//   state = {
//     open: false,
//     width: window.innerWidth
//   };

//   updateWidth = () => {
//     const newState = { width: window.innerWidth };

//     if (this.state.open && newState.width > 991) {
//       newState.open = false;
//     }

//     this.setState(newState);
//   };

//   toggleNav = () => {
//     this.setState({ open: !this.state.open });
//   };

//   componentDidMount() {
//     window.addEventListener("resize", this.updateWidth);
//   }

//   componentWillUnMount() {
//     window.removeEventListener("resize", this.updateWidth);
//   }

//   render() {
//     return (
//       <nav className="navbar navbar-expand-lg navbar-light mb-2">
//         <Link className="navbar-brand" to="/">
//           SimpleFoods
//         </Link>
//         <button
//           onClick={this.toggleNav}
//           className="navbar-toggler"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link
//                 className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
//                 to="/"
//               >
//                 Search
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
//                 to="/saved"
//               >
//                 Recipes
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className={window.location.pathname === "/stores" ? "nav-link active" : "nav-link"}
//                 to="/stores"
//               >
//                 Stores
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className={window.location.pathname === "/pantry" ? "nav-link active" : "nav-link"}
//                 to="/pantry"
//               >
//                 Pantry
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }

// export default Nav;


import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnMount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light mb-2 justify-lg-content-center text-center" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        {/* <Link className="navbar-brand" to="/">
          SimpleFoods
        </Link> */}
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={window.location.pathname === "/stores" ? "nav-link active" : "nav-link"}
                to="/stores"
              >
                Stores
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={window.location.pathname === "/pantry" ? "nav-link active" : "nav-link"}
                to="/pantry"
              >
                Pantry
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
