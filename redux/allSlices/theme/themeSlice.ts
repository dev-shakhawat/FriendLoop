import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface themeState {
  theme: string
}

const initialState: themeState = {
  theme: 'system',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeSet: (state, action: PayloadAction<string>) => {
        console.log(action.payload);
        
      state.theme = action.payload
    },
  },
})


export const { themeSet } = themeSlice.actions

export default themeSlice.reducer