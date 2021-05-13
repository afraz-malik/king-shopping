import {takeLatest, put} from 'redux-saga/effects'
import {clearCart} from './cart.action';

export function* emptyCart(){
    yield put(clearCart())
}
export function* isSignedOut(){
    yield takeLatest('SIGN_OUT_SUCCESS', emptyCart)
}