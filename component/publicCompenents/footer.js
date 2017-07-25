import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'
// require('../../css/common.scss')
require('../../css/footer.scss')
const styles = {};

styles.link = {
  color: '#ccc',
}

styles.activeLink = {
  ...styles.link,  // ...的意思是相当于拿到了styles.link里面的全部属性
  color:"#ff8aca"
}
const FooterList = React.createClass({
    handleClick:function(e){
    e.stopPropagation();
    e.preventDefault();
  },
    render(){
        return(
            <div className = "footer-list">
                <IndexLink  to="/"  styles={styles.link}  activeStyle={styles.activeLink}>
                    <div className = "col-25 home iconfont active" >
                            <p>主页</p>
                    </div>
                </IndexLink>
                <Link  to="/star"  styles={styles.link}  activeStyle={styles.activeLink}>
                    <div className = "col-25 star iconfont">
                        <p>动态</p>
                    </div>
                </Link>
                <Link  to="/find" styles={styles.link}  activeStyle={styles.activeLink}>
                    <div className = "col-25 find iconfont">
                        <p>发现</p>
                    </div>
                </Link>
                <Link  to="/me" styles={styles.link}  activeStyle={styles.activeLink}>
                    <div className = "col-25 me iconfont">
                        <p>我的</p>
                    </div>
                </Link>
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