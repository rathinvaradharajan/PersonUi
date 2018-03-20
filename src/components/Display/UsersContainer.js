import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/user';
import {browserHistory} from 'react-router';
import IndexContainer from '../Edit/IndexContainer';
import toastr from 'toastr';

class UsersContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {user:null};
    this.handleClick = this.handleClick.bind(this);
    this.redirectToConfirmation = this.redirectToConfirmation.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(username){
    const userDet = getUser(this.props.users,username);
    this.setState({
      user: userDet
    });
  }


  handleDelete(user) {
    this.props.actions.deleteUser(user).then(() =>{
      toastr.success("Delete Successful");
      this.redirectToConfirmation();
    });
  }

  redirectToConfirmation() {
    browserHistory.push('/users');
  }

  handleClick(userinfo){
    this.props.actions.updateUser(userinfo).then(() =>{
      toastr.success("Change Successful");
    })
  }

  componentWillReceiveProps(nextProps){
    if(this.props.users.name != nextProps.users.name) {
      this.setState({users:nextProps.users});
    }
  }

  redirectToProfile() {
    browserHistory.push('/');
  }

  render() {
    return(
      <div>
        <Users users={this.props.users} click={this.onEdit}/>
        <IndexContainer user={this.state.user} onClick={this.handleClick} onDelete={this.handleDelete} />
      </div>
      );
    }
  }

UsersContainer.defaultProps = {
  users: {}
}

function mapStateToProps(state,ownProps) {
  return {
    users: state.user.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

function getUser(users,id) {
  const res = users.filter(user => user.name == id)
    if(res) return res[0];
    return null;
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);
