import React from 'react';
import InputField from './InputField';
import toastr from 'toastr';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps){
    if(newProps.user !== null) {
      this.setState({
        name:newProps.user.name,
        age:newProps.user.age,
        location:newProps.user.location,
        dob:newProps.user.dob
      });
    }
  }

  handleSubmit(event) {
    const keys = Object.keys(this.state);
    if(keys.length < 4){
      toastr.error("Please fill the Details");
      return;
    }
    this.props.onClick(this.state);
  }

  redirectToConfirmation() {
    browserHistory.push('/users');
  }

  handleChange(ChangeInfo) {
      this.setState((prevState, props) => ({
        [ChangeInfo.fieldname]: ChangeInfo.fieldvalue
      }));
  }
  render() {
    const {age, name, location, dob} = this.state || " ";
    return(
      <div>
      <table className="table table-striped">
        <tbody>
          <tr><td>Name :</td><td><InputField value={name} fieldType="text" fieldName="name" onChange={this.handleChange} namedisabled={this.props.nameDisabled}/></td></tr>
          <tr><td>Age :</td><td> <InputField value={age} fieldType="text" fieldName="age" onChange={this.handleChange}/></td></tr>
          <tr><td>Location :</td><td><InputField value={location} fieldType="text" fieldName="location" onChange={this.handleChange}/></td></tr>
          <tr><td>DOB : </td><td><InputField value={dob} fieldType="date" fieldName="dob" onChange={this.handleChange}/></td></tr>
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={this.handleSubmit} id="submitButton">Submit</button>
      &nbsp;<Link to={'/users'}>Profiles</Link>
    </div>
    );
  }
}

Form.defaultProps = {
  user: {
    age:"",
    name:"",
    location:"",
    dob:""
  }
}

export default Form;
