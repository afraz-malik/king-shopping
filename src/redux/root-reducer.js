import {userReducer} from './user/user.reducer.js'
import {cartReducer} from './cart/cart.reducer'
import {shopDataReducer} from './shop-data/shop-data.reducer'
import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key : 'root',
    storage,
    whitelist: ['cart', 'user']

}

const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer,
    shopData: shopDataReducer
})

export default persistReducer(persistConfig, rootReducer);