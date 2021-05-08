import React from 'react';
import FormInput from '../form-input/form-input';
import Button from '../button/button';
import {auth, signInWithGoogle} from '../../firebase/firebase-utils'
import './sign-in.scss'
class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            email: '',
            password: ''
        }
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit = async (event) => {

        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        }
        catch(err){
            console.log(err)
        }        
    }
    render(){
        return(
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span className='title'>Sign In with your Email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' label='email' value = {this.state.email} handleChange={this.handleChange} required/>
                    <FormInput type='password'  name='password' label='password' value = {this.state.password} handleChange={this.handleChange}/>
                    <div className="buttons">
                        <Button type="submit">SIGN IN</Button>
                        <Button onClick={signInWithGoogle} google='true'>SIGN IN WITH GOOGLE</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;