import React from 'react'
import './App.scss';
//Router
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from "react-router-dom";
//Firebase
import {auth, createUser} from './firebase/firebase-utils'
//Redux
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'
//Selector
import {currentUserSelector} from './redux/user/user.selectors';
import {cartHiddenSelector} from './redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
//Pages
import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shoppage';
import CheckOut from './pages/checkout/checkout'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up';

const mapStateToProps=createStructuredSelector({
    currentUser: currentUserSelector,
    isCartHidden : cartHiddenSelector
})

const mapDispatchToProps=(dipatch)=>({
  setCurrentUser: (user) => dipatch(setCurrentUser(user)) 
})

class App extends React.Component{
  unSubFromAuth = null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unSubFromAuth = auth.onAuthStateChanged(async user=>{  
      if(user){
        const userRef = await createUser(user);
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      else{
        console.log('No user till now')
        setCurrentUser(user)
      }
    })
  }
  componentWillUnmount(){
    console.log('came')
    this.unSubFromAuth = null
  }
  render(){
    const {currentUser, isCartHidden} = this.props;
    const URL = '/'
    return (
      <Router>
        {/* <Redirect to = {`${URL}`}/> */}
        <Route  path={`${URL}`}> <Header currentUser = {currentUser} hidden={isCartHidden}/> </Route>
        <Switch>
          <Route exact path={`${URL}`} component={HomePage}/>
          <Route   path={`${URL}shop`} component={ShopPage}/>
          <Route exact path={`${URL}checkout`} component={CheckOut}/>
          <Route exact path = {`${URL}signIn`} render={()=> currentUser? (<Redirect to ={`${URL}`}/>):<SignInSignUp/>} />
        </Switch>
      </Router>  
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
