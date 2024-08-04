import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    password: ""
}


const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser: {
            prepare(name, email, password) {
                return {
                    payload: { name, email, password }
                };
            },
            reducer(state, action) {
                state.name = action.payload.name
                state.email = action.payload.email
                state.password = action.payload.password
            }
        },
        updatePassword(state, action) {
            state.password = action.payload
        }
    }

}
)

export const {createUser, updatePassword}=userReducer.actions
export default userReducer.reducer