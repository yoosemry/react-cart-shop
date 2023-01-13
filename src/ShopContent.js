import { createContext, useReducer, useContext } from "react";
import shopReducer, { initialState } from "./shopReducer";

const ShopContext = createContext(initialState);


export const ShopProvider = ({ children }) => {

    const [state, dispatch] = useReducer(shopReducer, initialState);

    const totalCalc = (products)=>{

        let total = 0;
        products.forEach(pro => {
            total += pro.price
        });
   
        dispatch({
            type : "CALCULATOR_TOTAL",
            payload : {
                total
            }
        })

    }
 

    const addToCart = (product) => {

        const updatedProduct = state.products.concat(product);
        totalCalc(updatedProduct)

        dispatch(
            {
                type: "ADD_TO_CART",
                payload: {
                    products: updatedProduct
                }
            }
        );

    };

        const removeToCard = (product)=>{

            const updateToProduct = state.products.filter(p => p.id !== product.id);
            totalCalc(updateToProduct);
            dispatch({
                type : "REMOVE_CART" , 
                payload : {
                    cartId : updateToProduct
                }
            })

        }


   
    const values = {
        products: state.products,
        total: state.total,
        addToCart,
        removeToCard,


    };

    return <ShopContext.Provider value={values}>
        {children}
    </ShopContext.Provider>;

};

const useShop = () => {
    const context = useContext(ShopContext);

    if (context === undefined) {
        throw new Error("context must be used inside shopContex");
    }
    return context;
};

export default useShop;