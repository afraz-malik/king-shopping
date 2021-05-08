import shopData from './shop.data'

const initialState = {
    shopDataList: shopData
}
export const shopDataReducer = (state=initialState, action) =>{
    switch(action.type){
        default:
            return state
    }
}