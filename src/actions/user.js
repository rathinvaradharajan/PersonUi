import * as types from './actionTypes';
import axios from '../../node_modules/axios/dist/axios.min.js'

export function loadusersSuccess(user) {
  return {type:types.LOAD_USERS_SUCCESS,user}
}

export function createuserSuccess(user) {
  return {type:types.CREATE_USERS_SUCCESS,user}
}

export function updateuserSuccess(user) {
  return {type:types.UPDATE_USERS_SUCCESS,user}
}

export function deleteuserSuccess(user) {
  return {type:types.DELETE_USERS_SUCCESS,user}
}

export function loadUsers(){
  return dispatch => {
    return axios({
        method: 'GET',
        url:'http://localhost:8000/demo/all',
        headers:{
          'Authorization': 'Basic QWRtaW46MTIzNDU='
        }
      }).then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        dispatch(loadusersSuccess(response.data[i]));
      }
    }).catch((error) =>{
      console.log(error);
    });
  };
}

export function saveUser(user){
  return dispatch => {
    return axios({
      method: 'GET',
      url:`http://localhost:8000/demo/add?name=${user[0].name}&age=${user[0].age}&location=${user[0].location}&dob=${user[0].dob.toString()}`,
      headers:{
        'Authorization': 'Basic QWRtaW46MTIzNDU='
      }
    }).then((response) =>{
      console.log(response);
      dispatch(createuserSuccess(user))
    });
  };
}

export function updateUser(user){
  return dispatch => {
    return axios({
      method: 'GET',
      url:`http://localhost:8000/demo/edit/${user.name}?age=${user.age}&location=${user.location}&dob=${user.dob.toString()}`,
      headers:{
        'Authorization': 'Basic QWRtaW46MTIzNDU='
      }
    }).then((response) =>{
      console.log(response);
      dispatch(updateuserSuccess(user))
    });
  };
}

export function deleteUser(user){
  return dispatch => {
    return axios({
      method: 'GET',
      url:`http://localhost:8000/demo/delete/${user.name}`,
      headers:{
        'Authorization': 'Basic QWRtaW46MTIzNDU='
      }
    }).then((response) =>{
      console.log(response.data);
      dispatch(deleteuserSuccess(user));
    });
  };
}
