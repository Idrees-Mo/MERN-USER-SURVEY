export default (state, action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return {
        ...state,
        users: action.payload
      }
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id == !action.payload)
      }
    case 'ADD_ERROR':
      return {
        ...state,
        error: action.payload
      }
    case 'REMOVE_ERROR':
      return {
        ...state,
        error: null
      }
    default:
      return state

  }
}