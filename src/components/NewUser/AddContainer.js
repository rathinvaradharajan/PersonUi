import React,{PropTypes} from 'react';
import {Link} from 'react-router';
import Form from '../common/Form';
import Users from '../Display/UsersContainer';
import {browserHistory} from 'react-router';
import * as userActions from '../../actions/user';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import Add from './Add'

class AddContainer extends React.Component {
  constructor(props, context) {
    super(props,context);
    this.state={users:[]};
    this.handleClick = this.handleClick.bind(this);
    this.redirectToConfirmation = this.redirectToConfirmation.bind(this);
  }

  redirectToConfirmation() {
    toastr.success("Profile Saved")
    browserHistory.push('/users');
  }

  handleClick(userinfo) {
   this.setState({
     users: [].concat(this.state.users, userinfo)
   }, () => {
     this.props.actions.saveUser(this.state.users).then(() => {
       this.redirectToConfirmation();
     });
   });
  }

  render() {
    return(
      <div>
        <h1>New User</h1>
        <div className="text-center">
          <Add onClick={this.handleClick} users={this.props.users} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state,ownProps) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(AddContainer);
