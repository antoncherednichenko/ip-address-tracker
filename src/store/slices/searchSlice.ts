import { createSlice } from "@reduxjs/toolkit";
import { ISearchState } from "../../types/searchSliceTypes";
import { searchAction } from "../actionCreaters/asyncActionCreators";


const initialState: ISearchState = {
    searchResult: null
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(searchAction.fulfilled, (state, { payload }) => {
            state.searchResult = payload
        })
    }
})

export default searchSlice.reducer