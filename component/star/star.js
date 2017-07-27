import React from 'react'
import { render } from 'react-dom'
require('../../css/new.scss')
var NewsData = require('../../data/NewData.json')
// console.log(NewsData);
const Star = React.createClass({
    render() {
        return (
            <div className="news-list">
                {this.props.children}
                dsafasfas
            </div>
        )
    }
})


export default Star;