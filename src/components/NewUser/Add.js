import React,{PropTypes} from 'react';
import Form from '../common/Form';
import Users from '../Display/UsersContainer';

class Add extends React.Component {
  constructor(props, context) {
    super(props,context);
    this.state={users:[]};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(userinfo) {
   this.props.onClick(userinfo);
  }

  render() {
    return(
      <div>
        <div className="text-center">
          <Form onClick={this.handleClick} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default Add;
