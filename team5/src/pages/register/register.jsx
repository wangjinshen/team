import React, { Component } from 'react'
import { connect } from 'dva';
 class Register extends Component {
  render() {
    return (
      <div>
          this is registry
      </div>
    )
  }
}
export default connect()(Register)