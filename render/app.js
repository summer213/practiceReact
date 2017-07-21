import React from 'react'
import {render} from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'


import App from '../component/app.js'

render((
    <Router>
        <Route path="/" component={App}/>
    </Router>
),document.getElementById('content'));