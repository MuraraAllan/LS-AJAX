import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreator } from 'redux';
import { deleteFriend } from '../Actions';

class Friend extends Component {
  render(props) {
    return (
      <div>
        <li>
          {this.props.friend.name}
          <br />
          {this.props.friend.age}
          <br />
          {this.props.friend.email}
        </li>
        <button onClick={() => {this.props.deleteFriend(this.props.id)}}>Delete</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, { deleteFriend })(Friend);
