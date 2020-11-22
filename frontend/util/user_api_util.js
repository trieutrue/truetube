export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/users`,
    contentType: 'application/json',
  })
}

export const fetchUser = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`,
    contentType: 'application/json'
  })
}

export const editUser = user => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: { user },
    contentType: 'application/json'
  })
}

export const deleteVideo = userId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}`
  })
}