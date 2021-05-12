import {takeLatest, put, call} from 'redux-saga/effects';
import {gettingShopData_Success, gettingShopData_Failed} from './shop.data.actions'
import { getShopDataFromFirestore} from '../../firebase/firebase-utils'


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