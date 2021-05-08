import {createSelector} from 'reselect';

const shopDataSelector = state => state.shopData;
export const shopDataListSelector = createSelector(
    [shopDataSelector],
    shopData => shopData.shopDataList
)
export const shopDataListSelectorToArrays = createSelector(
    [shopDataListSelector],
    shopData => Object.keys(shopData).map(key=> shopData[key])
)
export const getCategorySelector = (urlParams) => createSelector(
    [shopDataListSelector],
    shopDataList => shopDataList[urlParams]
)