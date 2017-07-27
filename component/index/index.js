import React from 'react'
import { render } from 'react-dom'
import Header from'../publicCompenents/header.js'
import MainWrap from'../index/mainCon.js'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
const MainWraps = React.createClass({
    render() {
        return (
            <div className="main-wrap">
                {this.props.children}
                <Header />
                <MainWrap>
                    {/*{this.props.children}*/}
                    
                </MainWrap>
            </div>
        )
    }
})

export default  MainWraps;
