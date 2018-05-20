import React from 'react'
import { renderRoutes } from 'react-router-config'
import {NavLink, Link} from 'react-router-dom'

import asyncComponent from './AsyncComponent'

import Layout from 'Components/layout/index'

//import Home from 'Page/home/index'
import Center from 'Page/center/index'


const Home = asyncComponent((store) =>
  import('Page/home/index').then(
    (module) => {
      return module.default;
    }
  )
)


const routes = [
  { component: Layout,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },{
        path: '/offline',
        exact: true,
        component: Center
      }
    ]
  }
]

export default routes