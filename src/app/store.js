import { configureStore } from '@reduxjs/toolkit';
import defaultSlice from '../features/defaultSlice';


export const store = configureStore({
  reducer: {
    default:defaultSlice,
  },

});