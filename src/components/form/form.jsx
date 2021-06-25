import React from 'react';
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
        }
            console.log("REQUEST",request)
         
        this.props.handler(request);
    }

    render(){
        console.log("FormProps",this.props)
        return (
        <div  className="formDiv">
            <form 
            onSubmit={this.submitHandler}>
                <div>
                <label>URL</label>
                <input onChange={this.inputHandler} type="url"  name="url"/>
                <input type="submit" value="GO" className="button" onClick={this.submitHandler}/>
                </div>
                <textarea name="body" id="body" cols="50" rows="10" onChange={this.bodyHandler}></textarea>
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