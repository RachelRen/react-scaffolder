import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    constructor() {
        super();
        this.state = {
            value: 5,
        };
    }
    render() {
        return (
            <div className="g-nav-container">
                <nav className="g-nav">
                    <Link to="/">logo re rere rere {this.state.value}</Link>
                </nav>

            </div>


        );
    }
}

export default Header;
