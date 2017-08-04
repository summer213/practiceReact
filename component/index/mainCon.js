import React from 'react'
import { render } from 'react-dom'
import ReactSwipe from 'react-swipe'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import News from '../index/new.js'

require('../../css/mainCon.scss')

const ConTab = React.createClass({
    render(){
        return(
            <div>
                <div className="con-tab clear">
                    <div className = "con-tab-list">
                        <Link to="/food/:1" className = "col-25 food">
                            <p>美食</p>
                        </Link>
                        <Link to="/food/:2" className = "col-25 notebook">
                            <p>手账</p>
                        </Link>
                        <Link to="/food/:3" className = "col-25 pets">
                            <p>宠物圈</p>
                        </Link>
                        <Link to="/food/:4" className = "col-25 game">
                            <p>休闲</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
})

const MainWrap = React.createClass({
    getInitialState:function(){
        window.scrollTo(0,0);
        return{

        }
    },
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