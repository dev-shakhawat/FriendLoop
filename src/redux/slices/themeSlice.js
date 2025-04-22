import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem("theme") ? localStorage.getItem("theme") : false,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    isTheme: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { isTheme } = themeSlice.actions

export default themeSlice.reducer