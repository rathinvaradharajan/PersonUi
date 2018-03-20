import React, {PropTypes} from 'react';
import Add from '../components/NewUser/Add';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};
export default App;
