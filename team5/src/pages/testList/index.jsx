import React, { Component } from 'react'
import { connect } from 'dva';
import { Pagination, Select, Button, Table } from 'element-react';
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
            value: '不限',
            columns: [
                {
                    label: "日期",
                    prop: "date",
                    width: 180
                },
                {
                    label: "姓名",
                    prop: "name",
                    width: 180
                },
                {
                    label: "地址",
                    prop: "address"
                }
            ],
            data: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    };

    render() {
        return (
            <div className="test">
                <h1>考试管理</h1>
                <div className="top">
                    <div>
                        状态:<Select value={this.state.value} placeholder="不限">
                            {
                                this.state.options.map(el => {
                                    return <Select.Option key={el.value} label={el.label} value={el.value} />
                                })
                            }
                        </Select>
                    </div>
                    <div>
                        班级:<Select value={this.state.value} placeholder="不限">
                            {
                                this.state.options.map(el => {
                                    return <Select.Option key={el.value} label={el.label} value={el.value} />
                                })
                            }
                        </Select>
                    </div>
                    <p>
                        <Button type="primary">查询</Button>
                    </p>
                </div>
                <div className="bot">
                    <p>试卷列表</p>
                    <Table
                        style={{ width: '100%' }}
                        columns={this.state.columns}
                        maxHeight={200}
                        data={this.state.data}
                    />

                    <div className="block">
                        <Pagination layout="total, sizes, prev, pager, next, jumper" total={400} pageSizes={[100, 200, 300, 400]} pageSize={100} currentPage={5} />
                    </div>
                </div>

            </div>
        )
    }
}

export default connect()(TestList)