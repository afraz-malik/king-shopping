export const gettingShopData_Start=()=>({
    type: 'GETTING_SHOP_DATA_FROM_FIREBASE_START'
})
export const gettingShopData_Success=(shopData)=>({
    type: 'GETTING_SHOP_DATA_FROM_FIREBASE_SUCCESS',
    payload: shopData
})
export const gettingShopData_Failed = (err) =>({
    type: 'GETTING_SHOP_DATA_FROM_FIREBASE_FAILED',
    paload: err
})
export const addItemInDb = (data)=>({
    type: 'ADD_ITEM_IN_DB_START',
    payload: data
})
export const addingItemInDb_Success = (result) =>({
    type: 'ADD_ITEM_IN_DB_SUCCESS',
    payload: result
})
export const addingItemInDb_Failed = (error) =>({
    type: 'ADD_ITEM_IN_DB_FAILED',
    payload: error
})

