import React, { Component } from 'react'
import { Input, Button, Select } from 'element-react';
import { connect } from 'dva';
import 'element-theme-default';
import "./css/index.css"
import Editor from 'react-umeditor'
import "../../../node_modules/react-umeditor/dist/less/editor.less"
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
            value: '',
            content: "",
            answer:""

        };
    };
    handleChange(content){
        this.setState({
            content: content
        })
        
    }
    answerChange(content){
        this.setState({
            answer: content
        })
        
    }

    getIcons(){
        var icons = [
            "source | undo redo | bold italic underline strikethrough fontborder emphasis | ",
            "paragraph fontfamily fontsize | superscript subscript | ",
            "forecolor backcolor | removeformat | insertorderedlist insertunorderedlist | selectall | ",
            "cleardoc  | indent outdent | justifyleft justifycenter justifyright | touppercase tolowercase | ",
            "horizontal date time  | image emotion spechars | inserttable"
        ]
        return icons;
    }
    getQiniuUploader(){
        return {
            url:'http://upload.qiniu.com',
            type:'qiniu',
            name:"file",
            request: "image_src",
            qiniu:{
                app:{
                    Bucket:"liuhong1happy",
                    AK:"l9vEBNTqrz7H03S-SC0qxNWmf0K8amqP6MeYHNni",
                    SK:"eizTTxuA0Kq1YSe2SRdOexJ-tjwGpRnzztsSrLKj"
                },
                domain:"http://o9sa2vijj.bkt.clouddn.com",
                genKey:function(options){
                    return options.file.type +"-"+ options.file.size +"-"+ options.file.lastModifiedDate.valueOf() +"-"+ new Date().valueOf()+"-"+options.file.name;
                }
            }
        }
    }
    
    componentDidMount() {
      
    }
    submitDate(){
        console.log(this.state)
    }
    render() {
        var icons = this.getIcons();
        var uploader = this.getQiniuUploader();
        var plugins = {
            image:{
                uploader:uploader
            }
        }
        var count = 100;
        var editors = [];
        for(var i=0;i<count;i++){
            editors.push({
                icons:icons,
                plugins:plugins
            })
        }
        return (
            <div className="test">
                <h1>添加试题</h1>
                <div className="bot">
                    <p>题目信息</p>
                    <p>题干：</p>
                    <Editor ref="editor"
                                icons={icons}
                                value={this.state.content}
                                defaultValue="<p>提示文本</p>"
                                onChange={this.handleChange.bind(this)}
                                plugins={plugins} />
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
                    <Editor ref="editor"
                                icons={icons}
                                value={this.state.answer}
                                defaultValue="<p>提示文本</p>"
                                onChange={this.answerChange.bind(this)}
                                plugins={plugins} />
                    <Button type="primary"  onClick={this.submitDate.bind(this)}>提交</Button>
                </div>

            </div>
        )
    }
}

export default connect()(TestList)