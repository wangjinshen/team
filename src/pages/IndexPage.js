import React, { Component } from 'react'
import { connect } from 'dva';

 class IndexPage extends Component {
   constructor(props){
     super(props)
     this.state={
       a:'123'
     }
   }
  render() {
    return (
      <div>
        1234
      </div>
    )
  }
  componentDidMount(){
    
    this.props.dispatch({
      type:'example/fetch',
      payload:1111
    })
  }
}


export default connect()(IndexPage);
