import React, {Component} from 'react';

export default class User extends Component {
  render() {
    return (
      <div>
        User: {this.props.user.id} {this.props.user.name}
      </div>
    )
  }
}
