import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreator } from 'redux';
import { getFriends } from '../Actions';
import { addFriend } from '../Actions';
import { updateFriend } from '../Actions';
import Friend  from './Friend';

 class FriendsList extends Component {
   constructor(props) {
     super(props);

     this.state = {
       friends: this.props.getFriends()
     };
     let input = '';
   }
  // componentDidMount() {
  //   this.props.getFriends();
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    let operation = [];
    this.props.friends.map((item, index) => {
      if (item.name === this.refs.inputName.value) {
        operation.push('update');
        operation.push(index);
        return;
      }
    });
    if (operation[0] === 'update') {
      this.props.updateFriend([{
        name: this.refs.inputName.value,
        age: this.refs.inputAge.value,
        email: this.refs.inputEmail.value,
      }, operation[1]]);
      return;
    }
    this.props.addFriend({
      name: this.refs.inputName.value,
      age: this.refs.inputAge.value,
      email: this.refs.inputEmail.value,
    })
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
          <input ref="inputAge" placeholder="Age"/>
          <input ref="inputEmail" placeholder="E-mail"/>
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
