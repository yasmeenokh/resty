import React from 'react';
// import { Redirect } from "react-router-dom";
// import { Route, Switch } from 'react-router-dom';
// import { browserHistory } from 'react-router';
import { Link } from 'react-router-dom';
import  './historyPage.scss'


import '../form/form.scss';


class HistoryPage extends React.Component{
    
    render() {
        let toBeRendered = this.props.history.map((item, i) => <li key={i}>
            <button onClick={() => { this.props.handler(item) }} className="history">
                
            <div className='method'>{item.method}</div> 
            <div className='url'>{item.url}</div> 
            </button>
            <button onClick={() => { this.props.handler(item) }} className='redirect'><Link to="/">Re-Run</Link></button>
</li>);
        return (
          <section className="historyPage">
                     
            <ul>
             {toBeRendered}
             {/* <div>
          <button><Link to="/">Re-Run</Link></button>
          </div> */}
            {/* <button
                onClick={
                    // <Redirect to="/" />
                    // this.props.history.push('/')
                }
              >
                Re-Run
              </button> */}

            </ul>

          </section>
        )
      }
}
export default HistoryPage;