/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { ProductReducer, initialState } from "../State/ProductState/ProductReducer";
import { ActionTypes } from "../State/ProductState/ActionTypes";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    useEffect(() => {
        dispatch({ type: ActionTypes.FETCHING_START });
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                dispatch({ type: ActionTypes.FETCHING_SUCCESS, payload: response.data })
            } catch (error) {
                dispatch({ type: ActionTypes.FETCHING_ERROR });
            }
        };

        fetchData();
    }, []);

    const addNewItem = async (newItem) => {
        try {
            dispatch({ type: ActionTypes.FETCHING_START });

            const response = await axios.post('http://localhost:5000/api/products', newItem);

            dispatch({ type: ActionTypes.ADD_MORE_PRODUCT, payload: response.data });

            console.log('Item added successfully:', response.data);

        } catch (error) {
            dispatch({ type: ActionTypes.FETCHING_ERROR });

            console.error('Error adding item:', error.message);
        }
    };

    const value = { state, addNewItem };

    return <ProductsContext.Provider value={value}>
        {children}
    </ProductsContext.Provider>;
};

export default ProductsProvider;