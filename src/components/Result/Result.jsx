import React from 'react';
import JSONPretty from 'react-json-view';
import { If, Then, Else } from 'react-if'
import Loader from 'react-loader-spinner';
import '../form/form.scss';

class Results extends React.Component {


  render(){
  return (
    <section className="results">
      {/* <p>test</p> */}
      <If condition={this.props.loading}>
        <Then>
          <div className='loading'> 
          <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} 
      />
      </div>
        </Then>
        <Else>
          <If condition={this.props.load}>
            <Then>
        <div>
              {/* {console.log("PROPS",this.props)}
              {console.log("RESULTS===>",this.props.results)} */}
              <p> Count : {this.props.count}</p> 
              <p>Headers :   <JSONPretty src={this.props.headers} /></p>            
              <p>Results :  <JSONPretty  src={this.props.results}/> </p>       
              {/* {dataArr.push({ url: this.props.url, method: this.props.method, body: this.props.results })}
              {window.localStorage.setItem('data', JSON.stringify(dataArr))} */}
        </div>
            </Then>
          </If>
        </Else>
      </If>
    </section >
  );
  }
}


export default Results;