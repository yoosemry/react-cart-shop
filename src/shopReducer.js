export const initialState = {
    products : [],
    total : 0
}

const ShopReducer = (state , action)=>{

    const {type , payload} = action;

    switch (type) {
        case 'ADD_TO_CART':

             return {
                ...state,
                products : payload.products
            }

        case 'REMOVE_CART':
            
          return {
            ...state,
            products : payload.cartId,
           
          }

          case "CALCULATOR_TOTAL" : 
          return{
            ...state,
            total : payload.total
          }
    
        default:
            return initialState;
    }

}

export default ShopReducer;