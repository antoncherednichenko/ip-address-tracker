import { createSlice } from "@reduxjs/toolkit";
import { ISearchState } from "../../types/searchSliceTypes";
import { searchAction } from "../actionCreaters/asyncActionCreators";


const initialState: ISearchState = {
    searchResult: null,
    isLoading: false
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(searchAction.pending, state => { state.isLoading = true })
        builder.addCase(searchAction.fulfilled, (state, { payload }) => {
            state.searchResult = payload
            state.isLoading = false
        })
        builder.addCase(searchAction.rejected, state => { state.isLoading = false })
    }
})

export default searchSlice.reducer