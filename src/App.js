import React from 'react';
import axios from 'axios';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Form from './components/form/form.jsx';
import Results from './components/Result/Result.jsx';
import  History from './components/History/History.jsx';
import './App.scss';
import './reset.scss';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      results:'',
      headers:'',
      count:0,
      history: [],
      url : '',
      method : '',
      loading : false,
      load : false,
      body : ''
    }
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }


stateHandler = (reqObj)=>{
  this.setState({...reqObj})
}

 dataHandler = async(req)=>{
  this.toggleLoading();
        try{
            console.log("REQUESTTTTT",this.state)
            this.setState({history : [...this.state.history, req]});
            this.setState({load: true});
            let raw =  await axios(req)
            console.log('RAW', raw)
            let data = raw.data;
            let count = data.count;
            let headers = raw.headers;
            let results = data;
            this.setState({headers,count, results});
            this.toggleLoading();
        } catch (error){
            console.log(error)
        }
      }

 historyHandler = async (history)=>{
   await this.dataHandler(history);
  this.setState({history:this.state.history.splice(0, this.state.history.length-1)})
 }
 
  render() {
    return (
      <div className='app' >
      <Header />
      <Form handler = {this.dataHandler} 
      stateHandler={this.stateHandler}
      url={this.state.url} 
      method={this.state.method}
      body={this.state.body}
      />
        <div className="render">

      <Results
      url={this.state.url} method={this.state.method} headers={this.state.headers} count={this.state.count} results={this.state.results} loading={this.state.loading} load={this.state.load} 
      />
      <History history={this.state.history} handler={this.historyHandler} />
        </div>
      <Footer />
     </div>
    )
    
  }
}

export default App;