import React from 'react'
import { render } from 'react-dom'
require('../../css/main_tab.scss');        // 加载 CSS'

const FoodTab = React.createClass({
    render() {
        var step1 = <div>
            <p>准备食材：处理干净的猪蹄、小葱结、姜片、蒜瓣、料酒、冰糖、生抽老抽。</p>
            <img src="../images/food/zhuti/step1.jpg" />
        </div>
        var step2 = <div>
            <p>八角香叶桂皮放入小纱包中封口，做成香料包。</p>
            <img src="../images/food/zhuti/step2.jpg" />
        </div>
        return (
            <div>
                <div className="Intro">
                    <p>我是姜老刀，经营着一间视频工作室。十几个人，一只不再流浪的白猫，是我们团队的组成。</p>

                    <p>平时我是导片子的，有时闲了，我也会在工作室给猫和熊孩子们做做饭，并拍成小短片给大家看。</p>

                    <p>这就是「日食记」的由来。</p>

                    <p>工作室熊孩子会在微博【@日食记】和微信【rishi-ji】里更新一些逗比日常，欢迎调戏。</p>

                    <p>希望这档小短片，可以持续记录我们的生活，温暖每一个人。</p>

                    <p>*******************************</p>

                    <p>酥饼喊你去打分：【日食记】</p>

                    <p>工作联络：【微博 @姜老刀】【邮箱 sean@canbox.tv】</p>
                </div>
                <Steps direction="vertical" current={3}>
                    <Step title="step1" status="process" description={step1} />
                    <Step title="step2" status="process" description={step2} />
                    <Step title="step3" status="process" description="This is a description." />
                </Steps>
            </div>
        )
    }
});
const NoteBook = React.createClass({
    render() {
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="#">{text}</a>,
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a href="#">Action 一 {record.name}</a>
                    <span className="ant-divider" />
                    <a href="#">Delete</a>
                    <span className="ant-divider" />
                    <a href="#" className="ant-dropdown-link">
                        More actions <Icon type="down" />
                    </a>
                </span>
            ),
        }];

        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }];
        return (
            <Table columns={columns} dataSource={data} />
        )
    }
})

export default { FoodTab,NoteBook };