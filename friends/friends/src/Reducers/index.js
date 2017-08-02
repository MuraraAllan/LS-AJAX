import { combineReducers } from 'redux';
import { getFriends } from '../Actions';

const friendsReducer = (friends = [], action) => {
  switch (action.type) {
    case 'GET_FRIENDS':
      return action.payload.data;
    case 'ADD_FRIEND':
      return [
        ...friends,
        {
          name: action.payload.name,
          age: action.payload.age,
          email: action.payload.email,
        }
      ];
    case 'UPDATE_FRIEND':
      let result = [];
      friends.forEach((item, index) => {
        if (index === action.payload[1]) return result.push(action.payload[0]);
        return result.push(item);
      })
      return result;
    case 'DELETE_FRIEND':
      let res = [];
      friends.forEach((item, index) => {
        if (index === action.payload) {
          return;
        }
        return res.push(item);
      })
      return res;
    default:
      return friends;
  };
};

const rootReducer = combineReducers({
    friends: friendsReducer
});

export default rootReducer;
