import React from 'react';
import Form from '../common/Form';
import Index from './Index';

class IndexContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  shouldComponentUpdate(nextProps,newState){
    if(this.state.user === nextProps.user){
      return false;
    }
    return true;
  }

  componentWillReceiveProps(newProps){
      this.setState({
        user:newProps.user
      });
  }

  handleDelete(user) {
    this.props.onDelete(user);
  }

  handleClick(userinfo){
    this.props.onClick(userinfo);
  }

  render() {
    return (
      <div>
        <h1 className="center"> Edit Profile</h1>
        <Index onClick={this.handleClick} user={this.state.user} nameDisabled="disabled" onDelete={this.handleDelete}/>
      </div>
    );
  }
}

IndexContainer.defaultProps = {
  user: {}
}

export default IndexContainer;
