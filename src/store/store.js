import { configureStore } from '@reduxjs/toolkit';
import { AllNewsSlice } from '@/features/news/newsSlice';
import { AllProjectsSlice } from '@/features/allProjects/allProjectsSlice';

export const store = configureStore({
    reducer: {
        allNews: AllNewsSlice.reducer,
        allProjects: AllProjectsSlice.reducer
    }
})