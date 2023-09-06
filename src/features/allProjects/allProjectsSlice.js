import { createSlice } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

const initialState = {
    allProjects: [
        {
            projectId: v4(),
            projectPhotoPath: 'blog.png',
            projectName: 'Nordic Rose',
            displayResolution: 'Project adapted',
            instruments: 'React, pagination, database operation',
            developmentPeriod: 'Month and a half',
            projectLink: 'https://amazing-halva-e39766.netlify.app/',
            personalFeedback: 'This site realizes the possibility to create a personal blog using react tools, where the user can read news from my life',
        },
        {
            projectId: v4(),
            projectName: 'Component library',
            projectPhotoPath: 'cover.png',
            displayResolution: 'Project adapted',
            instruments: 'React, modal windows, css styling',
            developmentPeriod: 'Two weeks',
            projectLink: 'https://adorable-naiad-9af708.netlify.app/',
            personalFeedback: 'I tried my hand at creating user interfaces on this site.',
        },
        {
            projectId: v4(),
            projectName: 'Furniro shop',
            projectPhotoPath: 'furniro.jpg',
            displayResolution: '1440px',
            instruments: 'Sliders, redux, asynchronous requests',
            developmentPeriod: 'Month',
            projectLink: 'https://gleeful-cajeta-71f261.netlify.app/',
            personalFeedback: 'This site is a full-fledged online furniture store, made on the basis of react and redux',
        },
        {
            projectId: v4(),
            projectName: 'Comments section',
            projectPhotoPath: 'comments.png',
            type: 'Comments section',
            displayResolution: 'Project adapted',
            instruments: 'Recursive component call, redux, asynchronous requests',
            developmentPeriod: '3 days',
            projectLink: 'https://stupendous-croissant-edadf1.netlify.app/',
            personalFeedback: 'this project provides an opportunity to create an analog of a discussion with support for changing accounts, replying to comments and other interaction with them',
        },
    ]
}

export const AllProjectsSlice = createSlice({
    name: 'allProjects',
    initialState,
    reducers: {
    }
})


export default AllProjectsSlice.reducer