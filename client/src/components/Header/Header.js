
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// class Header extends Component {
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
//       <h3 className="font-italic">Facebook</h3>
//       <div className="title-name" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
//         <Link style={{color:'black'}} to="/">
//           SimpleFoods
//         </Link>
//       </div>
//     );
//   }
// }

// export default Header;
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <div className="header">

    <div className="title-name left">
    <a href="http:ww.google.com">
      <img src="https://kwsymphony.ca/wp-content/uploads/2018/08/kisspng-facebook-social-media-computer-icons-linkedin-soci-gray-5ac493cf1c2975.7867418415228323351154.png"></img>
    </a>
    <a href="http:ww.google.com">
      <img src="https://kwsymphony.ca/wp-content/uploads/2018/08/kisspng-facebook-social-media-computer-icons-linkedin-soci-gray-5ac493cf1c2975.7867418415228323351154.png"></img>
    </a>
    <a href="http:ww.google.com">
      <img src="https://kwsymphony.ca/wp-content/uploads/2018/08/kisspng-facebook-social-media-computer-icons-linkedin-soci-gray-5ac493cf1c2975.7867418415228323351154.png"></img>
    </a>

    </div>

    <div className="title-name center">
      <Link style={{color:'black'}} to="/">
        SimpleFoods
      </Link>
    </div>

    <div className="title-name right">
    Built with React.JS
    </div>

    {/* <div className="pages">
        <Link to="/" className='links'>
          Search
        </Link>
        <Link to="/saved" className='links'>
          Recipes
        </Link>
        <Link to="/stores" className='links'>
          Stores
        </Link>
        <Link to="/pantry" className='links'>
          Pantry
        </Link>
    </div> */}

  </div>
);

export default Header;






//centering a div

{/* style={{display: 'flex',justifyContent:'center', alignItems:'center'}} */}