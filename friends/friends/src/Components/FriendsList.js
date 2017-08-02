import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreator } from 'redux';
import { getFriends } from '../Actions';
import { addFriend } from '../Actions';
import { updateFriend } from '../Actions';
import Friend  from './Friend';

 class FriendsList extends Component {
  //  constructor(props) {
  //    super(props);
  //    this.state = {
  //      friends: this.props.getFriends()
  //    };
  //    let input = '';
  //  }
  componentDidMount() {
    this.props.getFriends();
  }

  clearInput = () => {
    this.refs.inputName.value = '';
    this.refs.inputAge.value = '';
    this.refs.inputEmail.value = '';
  };

  inputValues = () => {
    return {
      name: this.refs.inputName.value.trim(),
      age: this.refs.inputAge.value.trim(),
      email: this.refs.inputEmail.value.trim(),
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    for(let i = 0; i < this.props.friends.length; i++){
      let friend = this.props.friends[i];
      if (friend.name === this.refs.inputName.value) {
        this.props.updateFriend([this.inputValues(), i]);
        this.clearInput();
        return;
      }
    }
    this.props.addFriend(this.inputValues());
    this.clearInput();
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.friends.map((friend, i) => {
            return (
              <Friend key={i} id={i} friend={friend}/>
            );
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input ref="inputName" placeholder="Name"/>
          <input ref="inputAge" type='number' placeholder="Age"/>
          <input ref="inputEmail" type='email' placeholder="E-mail"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, { getFriends, addFriend, updateFriend })(FriendsList);
