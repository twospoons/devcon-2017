import React, {Component} from 'react';

import User from '../components/User';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/UserActions';

@connect((store) => {
  return {
    users: store.users
  }
})

export default class UserList extends Component {

  clicked() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    //console.log(this.props.users);
    const userList = this.props.users.users.map((user) => {
      return <User key={user.id} user={user} />
    });

    return (
      <div>
        User list <button onClick={this.clicked.bind(this)}>Get Users</button>
        {userList}
      </div>
    )
  }
}
