import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
require('../../css/header.scss')
const Header = React.createClass({
    render(){
        return(
            <div>
                <div className = "header">
                    小磨叽
                </div>
            </div>
        )
    }
});

export default Header;