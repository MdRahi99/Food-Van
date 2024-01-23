import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProductsProvider";

export const useProducts = () => {
    const context = useContext(ProductsContext);
    return context;
};