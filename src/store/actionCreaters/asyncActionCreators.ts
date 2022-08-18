import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../API";

export const searchAction = createAsyncThunk(
    'search/searchAction',
    async (searchString: string) => {
        const result = axios(baseUrl + searchString)
            .then(resp => {
                if(resp.status === 200 && resp.data) {
                    return resp.data
                } else {
                    return null
                }
            }).catch(err => {
                console.error(err.message)
            })
        return result
    }
)