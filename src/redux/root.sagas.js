import {all, call} from 'redux-saga/effects'
import {gettingShopData_Start} from './shop-data/shop.data.sagas'
import {signInWithGoogleStart, signInWithEmailStart, settingUserPersistenceStart, signOut, signUp} from './user/users.sagas'
import {isSignedOut} from '../redux/cart/cart.sagas'


export default function* rootSaga(){
   yield all([
      call(gettingShopData_Start),
      call(signInWithGoogleStart),
      call(signInWithEmailStart),
      call(settingUserPersistenceStart),
      call(signOut),
      call(isSignedOut),
      call(signUp)
   ])
} 
