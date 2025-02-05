import axios from "axios";


import { api, API_BASE_URL } from "../../Config/api";
import {
    ADD_ITEM_TO_CART_REQUEST,
    ADD_ITEM_TO_CART_SUCCESS,
    ADD_ITEM_TO_CART_FAILURE,
    GET_CART_FAILURE,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    REMOVE_CART_ITEM_FAILURE,
    REMOVE_CART_ITEM_REQUEST,
    REMOVE_CART_ITEM_SUCCESS,
    UPDATE_CART_ITEM_FAILURE,
    UPDATE_CART_ITEM_REQUEST,
    UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";

export const addItemToCart = (Data, jwt) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST })
    try {

        const { data } = await axios.put(`${API_BASE_URL}/api/cart/add`, Data, {
            headers: {
                Authorization: `Bearer ${jwt}`, // Pass the JWT token in the Authorization header
            },
        })
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
        console.log("Data Added to cart", data)
    } catch (error) {
        console.error("Error adding item to cart:", error);
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message })
    }
}

export const getCart = (jwt) => async (dispatch) => {
    try {
        dispatch({ type: GET_CART_REQUEST });

        const { data } = await axios.get(`${API_BASE_URL}/api/cart/`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        dispatch({
            type: GET_CART_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_CART_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const removeCartItem = (reqData) => async (dispatch) => {
    try {
        dispatch({ type: REMOVE_CART_ITEM_REQUEST });
        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${reqData.jwt}`,
        //         "Content-Type": "application/json"
        //     },
        // };
        await axios.delete(`${API_BASE_URL}/api/cart_items/${reqData.cartItemId}`);

        dispatch({
            type: REMOVE_CART_ITEM_SUCCESS,
            payload: reqData.cartItemId,
        });
    } catch (error) {
        dispatch({
            type: REMOVE_CART_ITEM_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateCartItem = (reqData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_CART_ITEM_REQUEST });
        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${reqData.jwt}`,
        //         "Content-Type": "application/json"
        //     },
        // };
        const { data } = await axios.put(
            `${API_BASE_URL}/api/cart_items/${reqData.cartItemId}`,
            reqData.data
        );
        console.log("udated cartitem ", data)
        dispatch({
            type: UPDATE_CART_ITEM_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_CART_ITEM_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
