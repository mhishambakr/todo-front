import React, { useReducer } from "react";
import axios from "axios";
import listContext from "./ListContext";
import ListReducer from "./ListReducer"

import { GET_LIST } from "../types";

const ListState = (props) => {
    const initialState = {
        list: [],
    };
    const [state, dispatch] = useReducer(ListReducer, initialState);

    // GET LIST
    const getList = async () => {
        try {
            const res = await axios({
                method: "get",
                url: "http://localhost:5000/api/list/find",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1iYWtyIiwiaWF0IjoxNjUyNTczMTQwLCJleHAiOjE2NTI2NTk1NDB9.Bd0cmxXa5MwqFbkIXH-M0RCu1fa6J7h4HbxB-me6zRk"
                },
            })
            console.log(res);
            dispatch({
                type: GET_LIST,
                payload: res.data.data.list,
            });

        } catch (error) {
            alert(error?.response?.data?.message);
        }
    };

    const addItem = async ({ text }) => {
        try {
            const res = await axios({
                method: "post",
                url: "http://localhost:5000/api/item/add",
                data: { text },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1iYWtyIiwiaWF0IjoxNjUyNTczMTQwLCJleHAiOjE2NTI2NTk1NDB9.Bd0cmxXa5MwqFbkIXH-M0RCu1fa6J7h4HbxB-me6zRk"
                },
            })
            console.log(res);

            window.location.reload()
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }

    const markItem = async ({ id, isDone }) => {
        try {
            const res = await axios({
                method: "patch",
                url: "http://localhost:5000/api/item/update",
                data: { id, isDone },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1iYWtyIiwiaWF0IjoxNjUyNTczMTQwLCJleHAiOjE2NTI2NTk1NDB9.Bd0cmxXa5MwqFbkIXH-M0RCu1fa6J7h4HbxB-me6zRk"
                },
            })
            console.log(res);

            // window.location.reload()
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    }


    return (
        <listContext.Provider
            value={{
                list: state.list,
                getList,
                addItem,
                markItem
            }}
        >
            {props.children}
        </listContext.Provider>
    );
};

export default ListState;
