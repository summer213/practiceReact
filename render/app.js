import React from 'react'
import {render} from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'


import App from '../component/app.js'
import Star from '../component/star/star.js'
import News from '../component/index/new.js'
import Index from '../component/index/index.js'
import Food from '../component/maintab/main_tab.js'


// console.log(Index);
render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="/food/:*" component={Food}/>
            <Route path="/star" component={Star}>
                {/*<Route path="tip/:tipName" component={CircleTip} />
                <Route path="say" component={CircleSay} />*/}
            </Route>
        </Route>
    </Router>
),document.getElementById('content'));