import React from 'react';
import JSONPretty from 'react-json-pretty';
import '../form/form.scss';

class Results extends React.Component {

  render() {
      return (
         <div className='result'>
          <h3> Count:{this.props.count}</h3>

          <JSONPretty  data={this.props.headers} ></JSONPretty> 
          <JSONPretty data={this.props.results} ></JSONPretty> 
           
           
         </div>
      )
  }
}

export default Results;