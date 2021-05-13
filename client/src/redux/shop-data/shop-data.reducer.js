// import shopData from './shop.data'

const initialState = {
    shopDataList: {},
    isFetching: false,
    error : ''
}
export const shopDataReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'GETTING_SHOP_DATA_FROM_FIREBASE_START':
            return Object.assign({}, state, {isFetching: true})
        case 'GETTING_SHOP_DATA_FROM_FIREBASE_SUCCESS':
            return Object.assign({}, state, {shopDataList:action.payload, isFetching: false })
        case 'GETTING_SHOP_DATA_FROM_FIREBASE_FAILED':
            return Object.assign({}, state, {error:action.payload, isFetching: false })

        default:
            return state
    }
}