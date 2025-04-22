import { configureStore } from '@reduxjs/toolkit'
import isTheme from './slices/themeSlice'

export const store = configureStore({
  reducer: {
    theme: isTheme
  },
})