import axios from 'axios';
export const getFriends = () => {
  const promise = axios.get('http://localhost:5000/friends');
  return {
    type: 'GET_FRIENDS',
    payload: promise
  };

};
