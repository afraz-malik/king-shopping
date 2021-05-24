import {all, call} from 'redux-saga/effects'
import {gettingShopData_Start, addingItemInDb_Start} from './shop-data/shop.data.sagas'
import {signInWithGoogleStart, signInWithEmailStart, settingUserPersistenceStart, signOut, signUp} from './user/users.sagas'
import {isSignedOut} from '../redux/cart/cart.sagas'


export default function* rootSaga(){
   yield all([
      call(settingUserPersistenceStart),
      call(gettingShopData_Start),
      call(addingItemInDb_Start),
      call(signInWithGoogleStart),
      call(signInWithEmailStart),
      call(signOut),
      call(isSignedOut),
      call(signUp)
   ])
} 
