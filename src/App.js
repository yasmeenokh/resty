import React from 'react';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Form from './components/form/form.jsx';
import Results from './components/Result/Result.jsx';
import './App.scss';
import './reset.scss';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      results:'',
      headers:'',
      count:0,
    }
  }

 dataHandler = (count,results,headers)=>{
   this.setState({results:results,count:count,headers:headers})
  
 }

  render() {
    return (
      <div className='app' >
      <Header />
      <Form handler = {this.dataHandler}/>
      <Results count={this.state.count} results = {this.state.results} headers={this.state.headers} />
      <Footer />
     </div>
    )
    
  }
}

export default App;