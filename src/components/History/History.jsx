import React from 'react';

class History extends React.Component{
    render() {
        let toBeRendered = this.props.history.map((item, i) => <li key={i}>
            <button onClick={() => { this.props.handler(item) }}>
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