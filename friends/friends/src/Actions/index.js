import axios from 'axios';
export const getFriends = () => {
  const promise = axios.get('http://localhost:5000/friends');
  return {
    type: 'GET_FRIENDS',
    payload: promise
  };
};

export const addFriend = (object) => {
  const promise = axios.post('http://localhost:5000/new-friend',
   {
     'name': object.name,
     'age': object.age,
     'email': object.email
   });
  console.log(promise);
  return {
    type: 'ADD_FRIEND',
    payload: object
  };
};

export const updateFriend = (friend) => {
  const promise = axios.put('http://localhost:5000/update-friend', {
      index: friend[1],
      update: friend[0],
    }
  );
  return {
    type: 'UPDATE_FRIEND',
    payload: friend
  };
};

export const deleteFriend = (friend) => {
  const promise = axios.delete('http://localhost:5000/delete-friend', {
    index: friend
  }
  );
  return {
    type: 'DELETE_FRIEND',
    payload: friend
  };
};
