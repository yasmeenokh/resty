import React from 'react';
import Superagent from 'superagent';
import './form.scss';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            url:'',
            method:''
        }
    }



    inputHandler =  (event)=>{

        this.setState({url:event.target.value})

    }

    methodHandler = (event)=>{
        
        this.setState({method:event.target.value})
    }
    submitHandler =  async (event)=>{
        event.preventDefault();
        let raw =  await Superagent.get(this.state.url)
        let setHeaders = {
            Headers:raw.headers
        }
        let apiData =  {
            Response:raw.body.results
        }
        console.log(raw.headers)
        this.props.handler(raw.body.count,apiData,setHeaders) 
    }

    render(){
        return (
        <div  className="formDiv">
            <form className= 'formURL' action={this.state.method} onSubmit={this.submitHandler}>
                <label htmlFor="url">URL</label>
                <input onChange={this.inputHandler} type="url"  name="url"/>
                <input type="submit" value="GO" className="button"/>
            </form>
            <form onChange={this.methodHandler}  className="buttons">
                <input type="button" id="GET" value="GET" className="button"/>
                <input type="button" id="POST" value="POST" className="button"/>
                <input type="button" id="PUT" value="PUT" className="button"/>
                <input type="button" id="DELETE" value="DELETE" className="button"/>
            </form>
        </div>
        )
 } 
}

export default Form;