import React from 'react';
// import Superagent from 'superagent';
import './form.scss';

class Form extends React.Component{
    constructor(props){
        super(props);
        // this.state ={
        //     url:'',
        //     method:'',
        //     body : {},
        // }
    }


    inputHandler =  (event)=>{
        this.props.stateHandler({url: event.target.value})
    }

    bodyHandler= (event)=>{
        // console.log('bodyHandler', event.target.value)
        this.props.stateHandler({body: event.target.value})

    }

    methodHandler = (event)=>{
        this.props.stateHandler({method: event.target.value})
    }

    submitHandler = (event)=>{
        event.preventDefault();
        console.log("PARSING",JSON.parse(JSON.stringify(this.props.body)))
        let request = {
            url : this.props.url,
            method: this.props.method,
            data : this.props.body !== '' ? JSON.parse(this.props.body) : null,
            headers : {"Content-Type": "application/json" }
            // this.props.body !== '' ? JSON.parse(this.props.body) : {},
        }
            console.log("REQUEST",request)
         
        this.props.handler(request);
        // this.setState((oldState, props)=>{
        //     return {method:event.target.method.value,url:event.target.url.value}
        // })
        // let raw =  await Superagent.get(this.state.url)
        // let setHeaders = {
        //     Headers:raw.headers
        // }
        // let apiData =  {
        //     Response:raw.body.results
        // }
        // console.log(raw.headers)
        // this.props.handler(raw.body.count,apiData,setHeaders) 

    }

    // handleHistory = ()=>{
    //     this.props.history(true);
    // }
      
    

    render(){
        console.log("FormProps",this.props)
        return (
        <div  className="formDiv">
            <form 
            // action={this.state.method} 
            onSubmit={this.submitHandler}>
                <label>URL</label>
                <input onChange={this.inputHandler} type="url"  name="url"/>
                <textarea name="body" id="body" cols="30" rows="10" onChange={this.bodyHandler}></textarea>
                <input type="submit" value="GO" className="button" onClick={this.submitHandler}/>
            </form>
            <form onChange={this.methodHandler}  className="buttons">
                <input type="button" id="GET" value="GET" className="button" onClick={this.methodHandler}/>
                <input type="button" id="POST" value="POST" className="button" onClick={this.methodHandler}/>
                <input type="button" id="PUT" value="PUT" className="button " onClick={this.methodHandler}/>
                <input type="button" id="DELETE" value="DELETE" className="button" onClick={this.methodHandler}/>
            </form>
        </div>
        )
 } 
}

export default Form;