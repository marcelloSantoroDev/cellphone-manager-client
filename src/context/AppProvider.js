import { useEffect, useMemo } from "react";
import AppContext from "./AppContext";
import { useState } from 'react';
import productsGet from "../utils/productsGet";
// import { productApi } from '../mocks/productApi.mock';

function AppProvider ({ children }) {
    const [addProduct, setAddProduct] = useState({
        name: '',
        brand: '',
        model: '',
        price: '',
        color: '',
    });

    const [editProduct, setEditProduct] = useState({
        name: '',
        brand: '',
        model: '',
    });

    const [editDetails, setEditDetails] = useState({
        price: '',
        color: ''
    })

    const [productsList, setProductsList] = useState([]);

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: '',
    })


    const [userSignup, setUserSignup] = useState({
        name: '',
        email: '',
        password: '',
    })

    useEffect(() => {
        const apiFetch = async () => {
            const response = await productsGet();
            setProductsList(response);
        }
        apiFetch();
    },[])


    const values = useMemo(() => ({
        addProduct,
        setAddProduct,
        productsList,
        setProductsList,
        editProduct,
        setEditProduct,
        userLogin,
        setUserLogin,
        userSignup,
        setUserSignup,
        editDetails,
        setEditDetails
    }),[addProduct, productsList, editProduct, userLogin, userSignup, editDetails]);

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;