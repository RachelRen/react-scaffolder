import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { renderRoutes } from 'react-router-config';
import routes from './routers/index';
import { store, history } from 'Redux/store/index';

import './assets/sass/style.scss';

import { AppContainer } from 'react-hot-loader';

renderWithHotReload(renderRoutes(routes));

if (module.hot) {
    module.hot.accept('./routers/index', () => {
        console.log('module.hot.accept');
        const routes = require('./routers/index').default;
        renderWithHotReload(renderRoutes(routes));
    });
}

function renderWithHotReload(rootElement) {
    ReactDOM.render(
        <Provider store={store}>
		    <Router history={history}>{rootElement}</Router>
        </Provider>
        , document.getElementById('component'),
    );
}

