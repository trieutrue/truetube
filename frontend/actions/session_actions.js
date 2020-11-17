import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user).then(
    newUser => dispatch(receiveCurrentUser(newUser)),
    errors => dispatch(receiveErrors(errors.responeJSON))
  )
}

export const login = user => dispatch => {
  return SessionAPIUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responeJSON))
  )
}

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(
    () => dispatch(logoutCurrentUser()),
    errors => dispatch(receiveErrors(errors.responeJSON))
  )
}