import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './header';
import Menu from './menu';

import './header.scss';

class Layout extends Component {
    render() {
        return (
            <div className="g-component-wrap">
                <Header />
                <div className="g-container" >
                    <Menu />
                    <div className="g-content-wrap">
                        {renderRoutes(this.props.route.routes)}
                    </div>
                </div>
                <footer className="g-footer">
					footer
                </footer>
            </div>
        );
    }
}


export default Layout;
