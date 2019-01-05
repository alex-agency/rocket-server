import React, { Component } from 'react';
import './Home.css';
import reactLogo from '../logo.svg';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="container">
                    <img src={reactLogo} height="800" width="800" alt="React" />    
                </div>
            </div>
        )
    }
}

export default Home;