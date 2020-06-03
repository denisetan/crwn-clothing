import SHOP_DATA from './shop.data';

const INITIaL_STATE = {
    collections: SHOP_DATA
};

const shopReducer = (state = INITIaL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;