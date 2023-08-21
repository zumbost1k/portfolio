import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allNews: [
        {
            newsTitle: 'Hello World',
            newsDate: '18 Aug 2023',
            newsText: 'This is my site where I try and post about what I`m up to and how to do things with code.You can follow along by hitting the "Follow" button up above.Or if you`re only interested in stuff I wrote about, check out /content.',
            newsPhotoPath: 'flower.jpg',
            alt: 'i`m with flower'
        },
    ]
}

export const AllNewsSlice = createSlice({
    name: 'allNews',
    initialState,
    reducers: {
    }
})


export default AllNewsSlice.reducer