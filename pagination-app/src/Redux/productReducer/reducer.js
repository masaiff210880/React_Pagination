import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType";

const initialState = {
  product: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state=initialState, action) => {
    const {type,payload} = action;
    switch(type){
        case PRODUCT_REQUEST : return {...state,isLoading:true};
        case PRODUCT_SUCCESS : return {...state,isLoading:false,product:payload};
        case PRODUCT_FAILURE : return {...state,isLoading:false,isError:true}
        default : return state;
    }
};
