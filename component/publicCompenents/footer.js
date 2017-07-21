import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
// require('../../css/common.scss')
require('../../css/footer.scss')
const FooterList = React.createClass({
    render(){
        return(
            <div className = "footer-list">
                <div className = "col-25 home iconfont active">
                    <p>主页</p>
                </div>
                <div className = "col-25 star iconfont">
                    <p>动态</p>
                </div>
                <div className = "col-25 find iconfont">
                    <p>发现</p>
                </div>
                <div className = "col-25 me iconfont">
                    <p>我的</p>
                </div>
            </div>
        )
    }
})
const Footer = React.createClass({
    render(){
        return (
        <div className = "footer-bar">
            <FooterList />
        </div>
        )
    }
});

export default Footer;