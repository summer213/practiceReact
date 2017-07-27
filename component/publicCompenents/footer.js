import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router'

// import Star from '../component/star/star.js'
// require('../../css/common.scss')
require('../../css/footer.scss')
const ACTIVE = { color: '#ff8aca' }
const styles = {};
styles.link = {
  color: '#7b7979',
}
// console.log(styles)
styles.activeLink = {
  ...styles.link,  // ...的意思是相当于拿到了styles.link里面的全部属性
  color:"#ff8aca"
}
const FooterList = React.createClass({
  handleClick:function(e){
    // console.log(this.className);
    e.stopPropagation();
    e.preventDefault();
  },
    render(){
        return(
            <div className = "footer-list">
                <IndexLink  to="/"  className = "col-25 home iconfont" styles={styles.link}  activeStyle={styles.activeLink}>
                    <p>主页</p>
                </IndexLink>
                <Link  to="/star"  className = "col-25 star iconfont" styles={styles.link}  activeStyle={styles.activeLink}>
                    <p>动态</p>
                </Link>
                <Link  to="/find" className = "col-25 find iconfont" styles={styles.link}  activeStyle={styles.activeLink}>
                    <p>发现</p>
                </Link>
                <Link  to="/me" className = "col-25 me iconfont" styles={styles.link}  activeStyle={styles.activeLink}>
                    <p>我的</p>
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