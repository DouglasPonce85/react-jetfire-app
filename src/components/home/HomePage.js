import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="jumbotron">
            <h1>JetFire App</h1>
            <p>Course - React, Redux and React Router</p>
            <Link to="about" className="btn btn-primary btn-lg">
                Learn More
            </Link>
        </div>
    )
};

export default HomePage;