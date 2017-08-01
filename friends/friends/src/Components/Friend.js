import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreator } from 'redux';

class Friend extends Component {
  render(props) {
    return (
      <li>
        {this.props.friend.name}
        <br />
        {this.props.friend.email}
        <br />
        {this.props.friend.age}
      </li>
    );
  }
}



export default connect()(Friend);
