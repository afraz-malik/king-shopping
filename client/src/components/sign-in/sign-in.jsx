import React , { useState} from 'react';
import './sign-in.scss'
//Redux
import {connect} from 'react-redux'
import {signInWithGoogleStart, signInWithEmailStart} from '../../redux/user/user.action'


//Components
import FormInput from '../form-input/form-input';
import Button from '../button/button';



const mapDispatchToProps = (dispatch) =>({
    signInWithGoogleStart: () => dispatch(signInWithGoogleStart()),
    signInWithEmailStart: (emailAndPassword) => dispatch(signInWithEmailStart(emailAndPassword)),
})

const SignIn = ({signInWithEmailStart,signInWithGoogleStart }) =>{
    
    const [userCredentials, setUserCrendtials] = useState({email: '', password: ''})
    const {email, password} = userCredentials
    const handleChange = (event) =>{
        setUserCrendtials({...userCredentials, [event.target.name] : event.target.value})
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        signInWithEmailStart({email,password});
        setUserCrendtials({ email: '', password: ''})  
    }

    return(
        <div className="sign-in">
            <h1>I already have an account!</h1>
            <span className='title'>Sign In with your Email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type='email' name='email' label='email' value = {email} handleChange={handleChange} required/>
                <FormInput type='password'  name='password' label='password' value = {password} handleChange={handleChange}/>
                <div className="buttons">
                    <Button type="submit">SIGN IN</Button>
                    <Button type='button' onClick={signInWithGoogleStart} google='true'>SIGN IN WITH GOOGLE</Button>
                </div>
            </form>
        </div>
    )

}

export default connect(null, mapDispatchToProps)(SignIn);