import axios from 'axios';

export function fetchUsers() {
  return {
    type: "USERS_FETCH",
    payload: axios.get("https://jsonplaceholder.typicode.com/users")
  }
}
