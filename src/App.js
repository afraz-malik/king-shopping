import React from 'react'
import './App.scss';
//Router
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from "react-router-dom";
//Firebase
// import {auth, createUser} from './firebase/firebase-utils'
//Redux
import {connect} from 'react-redux'
import {isUserAuthenticated} from './redux/user/user.action'
import {gettingShopData_Start} from './redux/shop-data/shop.data.actions'
//Selector
import {createStructuredSelector} from 'reselect';
import {currentUserSelector} from './redux/user/user.selectors';
import {cartHiddenSelector} from './redux/cart/cart.selectors';
import {isFetchingSelector} from './redux/shop-data/shop.data.selector'
//Pages
import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shoppage';
import CheckOut from './pages/checkout/checkout'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up';
//Components
import Spinner from './components/spinner/spinner'

//Page with HOC Spinner
const HomepageWithSpinner = Spinner(HomePage);
const ShopPageWithSpinner = Spinner(ShopPage);

const mapStateToProps= createStructuredSelector({
    currentUser: currentUserSelector,
    isCartHidden : cartHiddenSelector,
    isFetching: isFetchingSelector,
})

const mapDispatchToProps=(dispatch)=>({
  // setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  isUserAuthenticated: () => dispatch(isUserAuthenticated()),
  gettingShopData_Start : () => dispatch(gettingShopData_Start())
})

class App extends React.Component{
  componentDidMount(){
    // this.turningFirebaseAuthOn();
    this.props.isUserAuthenticated()
    this.props.gettingShopData_Start()
  }
  // componentWillUnmount(){
  //   this.unSubFromAuth()
  // }
  // unSubFromAuth = null;
  // turningFirebaseAuthOn=()=>{
  //   this.unSubFromAuth = auth.onAuthStateChanged(async user=>{  
  //     if(user){
  //       const userRef = await createUser(user);
  //       userRef.onSnapshot(snapShot =>{
  //         this.props.setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data()
  //         })
  //       })
  //     }
  //     else{
  //       this.props.setCurrentUser(user)
  //     }
  //   })
  // }
  render(){
    const {currentUser, isCartHidden,isFetching } = this.props;
    const URL = '/'
    return (
      <Router>
        <Route  path={`${URL}`}> <Header currentUser = {currentUser} hidden={isCartHidden}/> </Route>
        <Switch>
          <Route exact path={`${URL}`} render={props => <HomepageWithSpinner isLoading={isFetching} {...props}/>}/>
          <Route   path={`${URL}shop`} render={props => <ShopPageWithSpinner isLoading={isFetching} {...props}/>}/>
          <Route exact path={`${URL}checkout`} component={CheckOut}/>
          <Route exact path = {`${URL}signIn`} render={()=> currentUser? (<Redirect to ={`${URL}`}/>):<SignInSignUp/>} />
        </Switch>
      </Router>  
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
