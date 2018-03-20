import React from 'react';

class InputField extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const userDetails = {fieldname:this.props.fieldName,fieldvalue:event.target.value};
    this.props.onChange(userDetails);
  }
  render() {
    return (
      <input type={this.props.fieldType} onChange={this.handleChange} value={this.props.value} disabled={this.props.namedisabled}/>
    );
  }
}

export default InputField;
