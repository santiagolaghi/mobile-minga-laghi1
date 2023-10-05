import { createReducer, createAction } from "@reduxjs/toolkit";
import { getAuthors } from "../actions/getAuthors.js";
import { updateActive } from "../actions/updateActive.js";

// Acción para iniciar sesión
export const login = createAction("login");
// Acción para cerrar sesión
export const logout = createAction("logout");

const initialState = {
    firstReq: false,
    inactive: [],
    active: [],
    isLoggedIn: false, // Nuevo campo para rastrear el estado de inicio de sesión.
};

const authors = createReducer(initialState, (builder) => {
    builder
        .addCase(getAuthors.fulfilled, (state, action) => {
            const newState = {
                ...state,
                firstReq: true,
                inactive: action.payload.inactive,
                active: action.payload.active,
            };
            return newState;
        })
        .addCase(getAuthors.pending, (state) => {
            const newState = {
                ...state,
            };
            return newState;
        })
        .addCase(updateActive.fulfilled, (state, action) => {
            let arrayState = [...state.inactive, ...state.active];
            let newArray = arrayState.filter(
                (author) => author._id !== action.payload.response._id
            );
            newArray = [...newArray, action.payload.response];
            let inactive = newArray.filter((author) => author.active !== true);
            let active = newArray.filter((author) => author.active === true);
            const newState = {
                ...state,
                inactive: inactive,
                active: active,
            };
            return newState;
        })
        .addCase(updateActive.pending, (state) => {
            const newState = {
                ...state,
            };
            return newState;
        })
        // Reducer para manejar el inicio de sesión
        .addCase(login, (state) => {
            return {
                ...state,
                isLoggedIn: true,
            };
        })
        // Reducer para manejar el cierre de sesión
        .addCase(logout, (state) => {
            return {
                ...state,
                isLoggedIn: false,
            };
        });
});

export default authors;
