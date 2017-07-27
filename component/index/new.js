import React from 'react'
import { render } from 'react-dom'
require('../../css/new.scss')
var NewsData = require('../../data/NewData.json')
// console.log(NewsData);
const NewLists = React.createClass({
    render() {
        return (
            <div className="news-list">
                <div className="news-item">
                    <div className="news-img col-35" style={this.props.styles}>
                    </div>
                    <div className="news-con col-60">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.desc}</p>
                    </div>
                </div>
            </div>
        )
    }
})

const News = React.createClass({
    render() {
        var styleback = {} , newList = [];
        NewsData.forEach(function (value, index) {
            var styleback = {
                'background':'url(../../images/'+ value.fileName +') no-repeat center',
                'backgroundSize':'cover'
            }
            // console.log(value);
            newList.push(<NewLists key={index} styles={styleback} title={value.title} desc={value.desc}/>)
        });
        return (
            <div>
                <div className="main-news">
                    <div className="news-title">
                        热文圈
                    </div>
                    {newList}
                </div>
            </div>
        )
    }
})

export default News;