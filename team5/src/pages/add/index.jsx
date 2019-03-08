import React, { Component } from 'react'
import { Input, Button, Select } from 'element-react';
import { connect } from 'dva';
import 'element-theme-default';
import "./css/index.css"

class TestList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: ''
        };
    };

    render() {
        return (
            <div className="test">
                <h1>添加试题</h1>
                <div className="bot">
                    <p>题目信息</p>
                    <p>题干：</p>
                    <Input placeholder="请输入内容" />
                    <p>题目主题：</p>
                    <Input
                        type="textarea"
                        autosize={{ minRows: 2, maxRows: 4 }}
                        placeholder="请输入内容"
                    />
                    <p>选择题目类型：</p>
                    <Select value={this.state.value} clearable={true}>
                        {
                            this.state.options.map(el => {
                                return <Select.Option key={el.value} label={el.label} value={el.value} />
                            })
                        }
                    </Select>
                    <p>选择课程：</p>
                    <Select value={this.state.value} clearable={true}>
                        {
                            this.state.options.map(el => {
                                return <Select.Option key={el.value} label={el.label} value={el.value} />
                            })
                        }
                    </Select>
                    <p>答案信息</p>
                    <Input
                        type="textarea"
                        autosize={{ minRows: 2, maxRows: 4 }}
                        placeholder="请输入内容"
                    />
                    <Button type="primary">提交</Button>
                </div>

            </div>
        )
    }
}

export default connect()(TestList)