import {takeLatest, put} from 'redux-saga/effects'
import {auth, googleProvider,createUserInFirestore, isUserAuthenticated} from '../../firebase/firebase-utils'
import { signInSuccess, signInFailed, signOutSuccess, signOutFailed} from './user.action'

export function* settingUserPersistence(){
    const user = yield isUserAuthenticated();
    const userRef = yield createUserInFirestore(user)
    if(userRef){
        const snapshot = yield userRef.get()
        yield put(
            signInSuccess({
            id: snapshot.id,
            ...snapshot.data()
        }))
    }
}
export function* settingUserPersistenceStart(){
    yield takeLatest('CHECKING_USER_PERSISTENCE',settingUserPersistence )
}

export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider)
        const userRef = yield createUserInFirestore(user)
        const snapshot = yield userRef.get()
        yield put(
            signInSuccess({
            id: snapshot.id,
            ...snapshot.data()
        }))
    }catch(err){
        yield put(signInFailed(err.message))
    }
}
export function* signInWithGoogleStart(){
    yield takeLatest('SIGN_IN_WITH_GOOGLE_START', signInWithGoogle)
}

export function* signInWithEmail({payload}){
    const {email, password} = payload
    try{
        const {user} = yield  auth.signInWithEmailAndPassword(email, password)
        const userRef = yield createUserInFirestore(user)
        const snapshot = yield userRef.get()
        yield put(
            signInSuccess({
            id: snapshot.id,
            ...snapshot.data()
        }))
    }catch(error){
        yield put(signInFailed(error.message))
    }
}
export function* signInWithEmailStart(){
    yield takeLatest('SIGN_IN_WITH_EMAIL_START', signInWithEmail)
}

export function* signOutStart(){
    try{
        yield auth.signOut()
        yield put(signOutSuccess())
    }catch(err){
        yield put(signOutFailed(err.message))
    }
}
export function* signOut(){
    yield takeLatest('SIGN_OUT_START', signOutStart)
}

export function* signUpStart({payload}){
    try{
        const {email, password, displayName} = payload
        const {user}= yield auth.createUserWithEmailAndPassword(email, password);
        const userRef = yield createUserInFirestore(user, {displayName})
        const snapshot = yield userRef.get()
        yield put(
            signInSuccess({
            id: snapshot.id,
            ...snapshot.data()
        }))
    }catch(err){
        yield put(signInFailed(err.message))
    }
}
export function* signUp(){
    yield takeLatest('SIGN_UP_START', signUpStart)
}