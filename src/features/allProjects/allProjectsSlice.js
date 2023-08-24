import { createSlice } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

const initialState = {
    allProjects: [
        {
            projectId: v4(),
            projectName: 'Nordic Rose',
            type: 'Personal blog',
            displayResolution: 'The project is adapted to any resolution',
            instruments: 'React, pagination, database operation, ',
            developmentPeriod: 'month and a half',
            projectLink: 'https://amazing-halva-e39766.netlify.app/',
            gitProjectLink: 'https://github.com/zumbost1k/Nordic-Rose-React',
            personalFeedback: 'This project was the first full-fledged website i made. with it i repeated all the basics of programming and learned to use a lot of new tools',
            projectKey: 'nordic'
        },
        {
            projectId: v4(),
            projectName: 'Component library',
            type: 'UI components',
            displayResolution: 'The project is adapted to any resolution',
            instruments: 'React, modal windows, css styling',
            developmentPeriod: 'two weeks',
            projectLink: 'https://adorable-naiad-9af708.netlify.app/',
            gitProjectLink: 'https://github.com/zumbost1k/component-library',
            personalFeedback: 'With this project I learned a lot of new things about styling with css. I had to mess around with switches, because for me at the beginning it was something incomprehensible',
            projectKey: 'ui'
        },
        {
            projectId: v4(),
            projectName: 'Furniro shop',
            type: 'Online store',
            displayResolution: 'The site is designed for 1440px resolution',
            instruments: 'Sliders, redux, asynchronous requests',
            developmentPeriod: 'Month',
            projectLink: 'https://gleeful-cajeta-71f261.netlify.app/',
            gitProjectLink: 'https://github.com/zumbost1k/furniro',
            personalFeedback: 'This project was quite challenging for me because of the sheer number of new tools required to develop this site, but I`m happy I did it',
            projectKey: 'furniro'
        },
        {
            projectId: v4(),
            projectName: 'Comments section',
            type: 'Comments section',
            displayResolution: 'The project is adapted to any resolution',
            instruments: 'Recursive component call, redux, asynchronous requests',
            developmentPeriod: '3 days',
            projectLink: 'https://stupendous-croissant-edadf1.netlify.app/',
            gitProjectLink: 'https://github.com/zumbost1k/comments-section',
            personalFeedback: 'The project is quite easy. I ran into a small problem when trying to implement nesting of replies to comments, but it was quickly solved when I figured out how to use recursion',
            projectKey: 'comments'
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