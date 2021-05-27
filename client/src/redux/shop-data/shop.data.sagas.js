import {takeLatest, put, call} from 'redux-saga/effects';
import {gettingShopData_Success, gettingShopData_Failed, addingItemInDb_Failed, addingItemInDb_Success} from './shop.data.actions'
import { getShopDataFromFirestore, addItemInFirestore} from '../../firebase/firebase-utils'


export function* gettingShopData_Start_Async(){
    try{
        const shopData = yield call(getShopDataFromFirestore);
        yield put(gettingShopData_Success(shopData))
    }
    catch(error){
        yield put(gettingShopData_Failed(error.message))
    }
}

export function* gettingShopData_Start(){
    yield takeLatest(
        'GETTING_SHOP_DATA_FROM_FIREBASE_START',
        gettingShopData_Start_Async
    );
}

export function* addingItemInDb(data){
    try{
        // console.log(data)
       const result = yield addItemInFirestore(data.payload.ref, data.payload.collectionToAdd, data.payload.itemToAdd );
       yield put(addingItemInDb_Success(result))
    //    alert("Added Successfully ! Kindly Refresh page")
       alert("Added Successfully !")
       window.location.reload(false); 
    }
    catch(error){
        yield put(addingItemInDb_Failed(error.message))
    } 
}
export function* addingItemInDb_Start(){
    yield takeLatest(
        'ADD_ITEM_IN_DB_START',
        addingItemInDb
    );
}