import React from 'react';
import './sign-up.scss'
//Redux
import {connect} from 'react-redux'
import {signUp} from '../../redux/user/user.action'
///Components
import FormInput from '../form-input/form-input'
import Button from '../button/button';
// import {Spinner} from '../spinner/spinner';

const mapDispatchToProps = (dispatch) =>({
    signUp: (userData) => dispatch(signUp(userData))
})
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
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit= async (event)=>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state
        if (password !== confirmPassword) {
            alert('Password not Matched')
            return
        }
        this.props.signUp({email, password, displayName});
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword : ''
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
                {/* {this.state.isLoading? <Spinner/> :null} */}
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(SignUp);
