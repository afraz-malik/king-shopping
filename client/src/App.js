
import React, { useEffect, lazy, Suspense} from 'react'
import './App.scss';
//Router
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
//Redux
import { connect } from 'react-redux'
import { isUserAuthenticated } from './redux/user/user.action'
import { gettingShopData_Start } from './redux/shop-data/shop.data.actions'
//Selector
import { createStructuredSelector } from 'reselect';
import { currentUserSelector } from './redux/user/user.selectors';
import { cartHiddenSelector } from './redux/cart/cart.selectors';
import { isFetchingSelector } from './redux/shop-data/shop.data.selector'

//Pages
// import HomePage from './pages/homepage/homepage';
// import ShopPage from './pages/shoppage/shoppage';
// import CheckOut from './pages/checkout/checkout'
// import AboutPage from './pages/about/about'
// import AdminPage from './pages/adminpage/adminpage'
// import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up';

//Components
import Header from './components/header/header';
import ErrorBoundary from './components/error-boundary/error-boundary'
import {SpinnerHOC, Spinner} from './components/spinner/spinner'

//Pages with React Lazy 
const HomePage        =       lazy( () => import('./pages/homepage/homepage'));
const ShopPage        =       lazy( () => import('./pages/shoppage/shoppage') );
const AdminPage       =       lazy( () => import('./pages/adminpage/adminpage') );
const AboutPage       =       lazy( () => import('./pages/about/about') );
const CheckOut        =       lazy( () => import('./pages/checkout/checkout') );
const SignInSignUp    =       lazy( () => import('./pages/sign-in-sign-up/sign-in-sign-up') );

//Pages wil HOC Spinner
const HomepageWithSpinner = SpinnerHOC(HomePage);
const ShopPageWithSpinner = SpinnerHOC(ShopPage);
const AdminPageWithSpinner = SpinnerHOC(AdminPage);


const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  isCartHidden: cartHiddenSelector,
  isFetching: isFetchingSelector,
})

const mapDispatchToProps = (dispatch) => ({
  isUserAuthenticated: () => dispatch(isUserAuthenticated()),
  gettingShopData_Start: () => dispatch(gettingShopData_Start())
})

const App = ({ currentUser, isCartHidden, isFetching, gettingShopData_Start, isUserAuthenticated }) => {
  useEffect(()=>{
    isUserAuthenticated() 
    gettingShopData_Start()
  }, [isUserAuthenticated,gettingShopData_Start ])

  //Kindly Change the followings accordingly if you are hosting on GH Pages
  // const URL = '/king-shopping/'
  // "homepage": "https://afraz-malik.github.io/king-shopping",
  // shopData Sagas
  // signIn admin
  const URL = '/'

  return (
    <Router>
      <Header currentUser={currentUser} hidden={isCartHidden} /> 
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
            <Route exact path={`${URL}`} render={props => <HomepageWithSpinner isLoading={isFetching} {...props} />} />
            <Route path={`${URL}shop`}  render={props => <ShopPageWithSpinner isLoading={isFetching} {...props} />} />
            <Route exact path={`${URL}admin`}  render={props => <AdminPageWithSpinner isLoading={isFetching} {...props} />} />
            <Route path={`${URL}about`} component={AboutPage} />
            <Route exact path={`${URL}checkout`} component={CheckOut} />
            <Route exact path={`${URL}signIn`} render={() => currentUser ? (<Redirect to={`${URL}`} />) : <SignInSignUp />} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </Router>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
