import React from 'react';
import '../form/form.scss';


class History extends React.Component{
    render() {
        let toBeRendered = this.props.history.map((item, i) => <li key={i}>
            <button onClick={() => { this.props.handler(item) }} className="history">
            <div>{item.method}</div> 
            <div>{item.url}</div> 
            </button></li>);
        return (
          <section>
            <ul>
             {toBeRendered}
            </ul>
          </section>
        )
      }
}
export default History;