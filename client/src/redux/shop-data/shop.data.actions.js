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

