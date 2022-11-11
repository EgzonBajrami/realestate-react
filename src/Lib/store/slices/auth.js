import {createSlice} from '@reduxjs/toolkit'

const data = localStorage.getItem('real_token') ? JSON.parse(localStorage.getItem('real_token')):null

const initialState ={
    data,
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            localStorage.setItem('real_token',JSON.stringify(action.payload))
            state.data = action.payload
        },
        logout:(state) =>{
            localStorage.removeItem('real_token');
            state.data = null;
        }
    }
})
export const {login, logout} = authSlice.actions
export default authSlice.reducer