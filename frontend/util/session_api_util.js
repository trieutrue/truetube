export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user },
    contentType: "application/json"
  })
}

export const login = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user },
    contentType: "application/json"
  })
}

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
}