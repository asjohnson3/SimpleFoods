import React from "react";
import { Link } from "react-router-dom";
import "./PageLinks.css";

const PageLinks = () => (

    <div className="pages">
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
    </div>

);

export default PageLinks;