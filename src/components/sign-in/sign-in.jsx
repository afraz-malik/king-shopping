import React from 'react';
import './sign-in.scss'
//Redux
import {connect} from 'react-redux'
import {signInWithGoogleStart, signInWithEmailStart} from '../../redux/user/user.action'
//Components
import FormInput from '../form-input/form-input';
import Button from '../button/button';
// import {Spinner} from '../spinner/spinner';


const mapDispatchToProps = (dispatch) =>({
    signInWithGoogleStart: () => dispatch(signInWithGoogleStart()),
    signInWithEmailStart: (emailAndPassword) => dispatch(signInWithEmailStart(emailAndPassword))
})
class SignIn extends React.Component{
    constructor(props){
        super(props);
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
        this.props.signInWithEmailStart({email,password});
        this.setState({ email: '', password: ''})  
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
                        <Button type='button' onClick={this.props.signInWithGoogleStart} google='true'>SIGN IN WITH GOOGLE</Button>
                    </div>
                </form>
                {/* {this.state.isLoading? <Spinner/> :null} */}
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(SignIn);