import React , { useState} from 'react';
import './sign-in.scss'
//Redux
import {connect} from 'react-redux'
import {signInWithGoogleStart, signInWithEmailStart} from '../../redux/user/user.action'

//Router
import {withRouter} from 'react-router-dom'
//Components
import FormInput from '../form-input/form-input';
import Button from '../button/button';



const mapDispatchToProps = (dispatch) =>({
    signInWithGoogleStart: () => dispatch(signInWithGoogleStart()),
    signInWithEmailStart: (emailAndPassword) => dispatch(signInWithEmailStart(emailAndPassword)),
})

const SignIn = ({signInWithEmailStart,signInWithGoogleStart, history }) =>{
    const [userCredentials, setUserCrendtials] = useState({email: '', password: ''})
    const [adminPanel, toggleAdminPanel] = useState(false)
    const {email, password} = userCredentials
    const handleChange = (event) =>{
        setUserCrendtials({...userCredentials, [event.target.name] : event.target.value})
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (email === 'admin@gmail.com' && password === 'admin') {
            alert('Welcome admin')
            // history.push(`/king-shopping/admin`)
            history.push(`/admin`)
            setUserCrendtials({ email: '', password: ''})  
            return
        }

        signInWithEmailStart({email,password});
        setUserCrendtials({ email: '', password: ''})  
    }

    return(
        <div>
        <div className="sign-in" style={adminPanel? {display: 'none'}: {display: 'flex'}}>
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
            <span className="root" onClick={()=> toggleAdminPanel(!adminPanel)}>Login as Admin</span>
        </div>
        <div className="sign-in admin" style={adminPanel? {display: 'flex'}: {display: 'none'}}>
        <h1>Welcome Admin!</h1>
        <span className='title'>Sign In with your Email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput type='email' name='email' label='email' value = {email} handleChange={handleChange} required/>
            <FormInput type='password'  name='password' label='password' value = {password} handleChange={handleChange}/>
            <div className="buttons">
                <Button type="submit">SIGN IN</Button>
            </div>
        </form>
        <span className="root1"  >For test admin use Email: admin@gmail.com Password: admin </span>
        <span className="root" onClick={()=> toggleAdminPanel(!adminPanel)}>Login as User</span>
    </div>
    </div>
    )

}

export default withRouter(connect(null, mapDispatchToProps)(SignIn));