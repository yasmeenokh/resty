
import React from 'react';
import './form.scss'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            url: '',
            method: ''
        }
    }
    inputHandler = (e)=>{
        e.preventDefault();
        this.setState({input: e.target.value})
    }
    urlHandler = ()=>{
        this.setState({
            url: this.state.input,
            method: this.state.method
        })
    }
    methodHandler = (e)=>{
        e.preventDefault();
        this.setState({method: e.target.innerHTML})
    }
    render(){
        return(
            <main>
                <div className='formDiv'>
                <form>
                    <label>
                        URL:
                    </label>
                    <input name= 'url' type='text' placeholder='http://url'
                    onChange={this.inputHandler}
                    />
                    <button type='button' onClick={this.urlHandler}>GO</button>
                </form>
                </div>
                    <div className='buttons'>
                        <button onClick={this.methodHandler}>GET</button>
                        <button onClick={this.methodHandler}>POST</button>
                        <button onClick={this.methodHandler}>PUT</button>
                        <button onClick={this.methodHandler}>DELETE</button>
                    </div>
                    <div className='result'>
                        <ul>
                            <li>
                                {this.state.method}  {this.state.url}
                            </li>
                        </ul>
                    </div>
            </main>
        )
    }
}

export default Form;