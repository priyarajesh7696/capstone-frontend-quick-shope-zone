import { createSlice } from "@reduxjs/toolkit";
// function findIndex(array,id){
//     for(let i = 0;i<array.length;i++)
//     {
//         if(array[i].id===id)
//             return i
//     }
//     return null
// }
export const Cartslice = createSlice({
    name:'carts',
    initialState:[],
    reducers:{
        saveCarts:(state,action)=>{
            // console.log(state,action)
            return action.payload
        },
        CartIncrement:(state,action)=>{
            console.log(action.payload)

            return action.payload
        },
        CartDecrement:(state,action)=>{
            // console.log(state,action)
            return action.payload
        }
        // deleteBlog:(state,action)=>{
        //     let id = action.payload
        //     let index = findIndex(state,id)
        //     if(index!=null)
        //     {
        //         state.splice(index,1)
        //     }
        // },
        // toggleBlog:(state,action)=>{
            
        //     let id = action.payload
        //     let index = findIndex(state,id)
        //     if(index!=null)
        //         state[index].status = !state[index].status
        // }  
    }
})

export const {saveCarts,CartIncrement,CartDecrement} = Cartslice.actions

export default Cartslice.reducer