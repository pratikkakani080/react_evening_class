import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import apiInstance from "../../api"


export const getData = createAsyncThunk('user/getData', async () => {
    let res = await apiInstance.get('todos')
    let data = await res.json()
    return data
})


const UserSlice = createSlice({
    name: 'user',
    initialState: {
        value: 0,
        data: []
    },
    reducers: {
        incremented: (state, action) => {
            console.log('action**', action);
            state.value += action.payload
            localStorage.setItem('action', action.payload)
        },
        decremented: state => {
            state.value -= 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getData.pending, () => {
            console.log('pending***');
        })
        builder.addCase(getData.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getData.rejected, () => {
            console.log('fail***');
        })
    }
})

export const { incremented, decremented } = UserSlice.actions

export default UserSlice.reducer