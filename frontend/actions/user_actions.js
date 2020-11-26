import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

const receiveUser = ({ user, videos }) => {
  debugger 
  return {
  type: RECEIVE_USER,
  user,
  videos
}}

const removeUser = userId => ({
  type: REMOVE_USER,
  userId
})

const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
})

export const fetchUsers = () => dispatch => {
  return UserAPIUtil.fetchUsers()
    .then( users => dispatch(receiveUsers(users)))
}

export const fetchUser = userId => dispatch => {
  return UserAPIUtil.fetchUser(userId)
    .then(payload => {
      debugger
      return dispatch(receiveUser(payload))})
}

export const editUser = user => dispatch => {
  return UserAPIUtil.editUser(user).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}

export const deleteUser = userId => dispatch => {
  return UserAPIUtil.deleteUser(userId).then(
    () => dispatch(removeUser(userId)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}