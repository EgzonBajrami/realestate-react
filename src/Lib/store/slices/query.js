import {createSlice} from '@reduxjs/toolkit'

const data = localStorage.getItem('query') ? JSON.parse(localStorage.getItem('query')):(
    localStorage.setItem('query',JSON.stringify([
        null,
        null,
        null,
        null,
        '1',
        '1'
    ]))
)

const initialState ={
    data,
}

export const querySlice = createSlice({
    name:'query',
    initialState,
    reducers:{
        getQuery:(state,action)=>{
            localStorage.setItem('query',JSON.stringify(action.payload))
            state.data = action.payload
        },
        removeQuery:(state) =>{
            localStorage.removeItem('query');
            state.data = null;
        }
    }
})
export const {getQuery, removeQuery} = querySlice.actions
export default querySlice.reducer