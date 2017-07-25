import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
import Footer from'../component/publicCompenents/footer.js'
import Header from'../component/publicCompenents/header.js'
import MainWrap from'../component/index/mainCon.js'

const App = React.createClass({
    render(){
        return (
        <div className = "wp-wrap">
            <div className = "main-wrap">{/*主屏幕*/}
                <Header />
                <MainWrap />
                {this.props.children}
                <div className = "main-content">{/*内容*/}
                    <div className = "main-footer">{/*页脚*/}
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
        )
    }
});

export default App;