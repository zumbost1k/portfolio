import { configureStore } from '@reduxjs/toolkit';
import { AllNewsSlice } from '@/features/news/newsSlice';

export const store = configureStore({
    reducer: {
        allNews: AllNewsSlice.reducer
    }
})