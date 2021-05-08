import React from 'react';
import FormInput from '../form-input/form-input'
import './sign-up.scss'
import Button from '../button/button';
import {auth, createUser} from '../../firebase/firebase-utils'
class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName: '',
            email: '',
            password: '',
            confirmPassword : ''
        }
    }
    handleSubmit= async (event)=>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state
        if (password !== confirmPassword) {
            alert('Password not Matched')
            return
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            )
            await createUser(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword : ''
            })
        }
        catch(error){
            console.log('error', error.message)
        }
  
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    render(){
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit} >
                    <FormInput
                        type='text'
                        name = 'displayName'
                        value = {this.state.displayName}
                        onChange = {this.handleChange}
                        label = ' Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name = 'email'
                        value = {this.state.email}
                        onChange = {this.handleChange}
                        label = 'Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name = 'password'
                        value = {this.state.password}
                        onChange = {this.handleChange}
                        label = 'Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name = 'confirmPassword'
                        value = {this.state.confirmPassword}
                        onChange = {this.handleChange}
                        label = 'Confirm Password'
                        required
                    />
                    <Button type='submit'>SIGN UP</Button>
                </form>

            </div>
        )
    }
}

export default SignUp;