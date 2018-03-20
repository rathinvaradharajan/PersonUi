import React, {PropTypes}from 'react';
import User from './User';
import {browserHistory} from 'react-router';

class Users extends React.Component{
  constructor(props) {
    super(props);
  }
  
  redirectToProfile() {
    browserHistory.push('/');
  }

  render() {
    return(
      <div>
        <h1>Profiles</h1>
        {this.props.users.map((user) => {
          return <User key={user.name} user={user} click={this.props.click}/>})
        }
        <button className="btn btn-primary" onClick={this.redirectToProfile}>Back</button>
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired
};

export default Users;
