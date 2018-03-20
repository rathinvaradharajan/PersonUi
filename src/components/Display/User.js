import React from 'react';
import {Link} from 'react-router';

class User extends React.Component {
	constructor(props){
		super(props);
		this.onEdit = this.onEdit.bind(this);
	}

	onEdit() {
		this.props.click(this.props.user.name);
	}

	render() {
		const user = this.props.user;
		return (
				<div className="container-fluid" style={{margin:'len'}}>
					<div><button onClick={this.onEdit}>{user.name}</button></div>
					<div>DOB: {user.dob}</div>
					<div>Age: {user.age}</div>
					<div>Location: {user.location}</div>
					<br />
				</div>
		);
		}
	}

export default User;
