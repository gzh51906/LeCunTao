
// 初始state
let defaultState = {
    goodslist:[{
        img: "https://img.lecuntao.com/data/upload/shop/store/goods/530/2017/03/28/530_05440564221299394_360.jpg",
        title: "剃须刀飞科男士充电式剃须刀电动刮胡刀男士胡须刀剔须刨",
        price: "55.00",
        person: "4人付款",
        id: 19,
        qty:2
    }],
    totalPrice:0
}

function reducer(state=defaultState,action){
    
    switch(action.type){
        
        case 'ADD_TO_CART':
            return {
                
                ...state,
                goodslist:[action.payload,...state.goodslist]
            }
        default:
            return state;
    }
}

export default reducer;