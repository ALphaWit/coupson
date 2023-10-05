import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit"

const initialState = {
    datas:[],
}

const defaultSlice = createSlice({
  name: "default",
  initialState,
  
  reducers: {
    setData:(state, action) => {
        const data = {
            id:nanoid(),
            text:action.payload,
        }
       state.datas.push(data)
    }
  }
})

export const { setData } = defaultSlice.actions
export default defaultSlice.reducer
