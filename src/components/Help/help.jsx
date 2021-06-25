import "./help.scss";

const Help = () =>{
    return(
        <div className='help'>
            <h4>Welcome To Our Resty Website</h4>
            <p>You can use our website by first entering the url to the input area,
                and choose the method, if the url you choose supports post and put functionality,
                you can add the body within the text area. And then the results will be rendered bellow the form.
            </p>
            <hr className='hr'/>
        </div>
    )
}

export default Help;