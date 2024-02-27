import { createSlice } from "@reduxjs/toolkit"

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        test: ''
    },
    reducers: {

    }
})

export const { } = AuthSlice.actions

export default AuthSlice.reducer