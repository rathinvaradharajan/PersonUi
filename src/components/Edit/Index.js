import React from 'react';
import Form from '../common/Form';
import toastr from 'toastr';

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillReceiveProps(newProps){
    this.setState({
      user:newProps.user
    });
  }

  handleDelete() {
    this.props.onDelete(this.state.user);
  }

  handleClick(userinfo){
    return this.props.onClick(userinfo);
  }

  render() {
    return (
      <div>
        <Form onClick={this.handleClick} user={this.state.user} nameDisabled="disabled"/>
        <div>
          <br /><br />
          <button className="btn btn-sm btn-block btn-danger" onClick={this.handleDelete}>Delete this User</button>
        </div>
      </div>
    );
  }
}

export default Index;
