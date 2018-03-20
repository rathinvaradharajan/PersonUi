import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function user(state=initialState,action){
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS:
        return Object.assign({}, state, {
          users: [].concat(state.users, action.user),
        });

    case types.CREATE_USERS_SUCCESS:
       return  Object.assign({}, state, {
         users: [].concat(state.users, action.user),
       });

    case types.UPDATE_USERS_SUCCESS:
      return Object.assign({},state,{
        users:[].concat(state.users.filter(user => user.name !== action.user.name),action.user)
      });

    case types.DELETE_USERS_SUCCESS:
    return Object.assign({},state,{
      users:[].concat(state.users.filter(user => user.name !== action.user.name))
    });

    default:
      return state;
  }
}
