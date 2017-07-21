import React from 'react'
import { render } from 'react-dom'
import ReactSwipe from 'react-swipe'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
require('../../css/mainCon.scss')

const ConTab = React.createClass({
    render(){
        return(
            <div>
                <div className="con-tab clear">
                    <div className = "con-tab-list">
                        <div className = "col-25 food">
                            <p>美食</p>
                        </div>
                        <div className = "col-25 notebook">
                            <p>手账</p>
                        </div>
                        <div className = "col-25 pets">
                            <p>宠物圈</p>
                        </div>
                        <div className = "col-25 game">
                            <p>休闲</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

const News = React.createClass({
    render(){
        return(
            <div>
                <div className="main-news">
                    <div className="news-title">
                        热文圈
                    </div>
                </div>
            </div>
        )
    }
})

const MainWrap = React.createClass({
    render(){
        return(
            <div>
                <div className = "main-con-swiper">
                    <ReactSwipe>
                        <div>
                            <div className="banner-img" style = {{'background':'url(../../images/banner/15.jpeg) no-repeat',
            'backgroundSize':'cover'}}>
                            </div>
                            {/*<img src="../../images/banner/15.jpeg"/>*/}
                        </div>
                        <div>
                            <div className="banner-img" style = {{'background':'url(../../images/banner/16.jpg) no-repeat',
            'backgroundSize':'cover'}}>
                            </div>
                        </div>
                    </ReactSwipe>
                </div>
                <div className="main-con-tab">
                    <ConTab />
                </div>
                <div className="main-con-new">
                    <News />
                </div>
            </div>
        )
    }
});

export default MainWrap;