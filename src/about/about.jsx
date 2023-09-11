import React from "react";
import './about.css'

const skillsQueue = [
    {
        headerText: 'Hard skills',
        key: 'hard'
    },
    {
        headerText: 'Also dealt with',
        key: 'dealWith'
    },
    {
        headerText: 'Soft skills',
        key: 'soft'
    },
]


const skills = {
    hard: ['Java Script', 'HTML', 'CSS', 'React', 'Redux', 'Vue 3', 'Git'],
    dealWith: ['C++', 'Python', 'NodeJS', 'MongoDB', 'Figma'],
    soft: ['Communication skills', 'Creative thinking', 'Purposefulness', 'Ability to work in a team', 'Stress tolerance', 'Attention to detail', 'Multitasking'],
    hobby: ['Music (compose poetry and music, play guitar)', 'Vocals (extreme and classical)', 'Studying psychology (social, family in the field of conflictology)', 'Cooking', 'Gardening']
}

const About = () => {
    return (
        <section className="about_section">
            <h3 className="about_title">Howdy! 👋</h3>
            <p className="about_text">My name is Mikhail. At the moment I am a specialized Front-end developer. This section presents my skills and expectations.</p>

            <div className="about_skill_list_container">
                {
                    skillsQueue.map(skillsQueueItem => {
                        return (<div key={skillsQueueItem.key}>
                            <h3 className="about_skill_header">{skillsQueueItem.headerText}</h3>
                            <ul className="about_skill_list">
                                {skills[skillsQueueItem.key].map(skill => {
                                    return (
                                        <li key={skill} className="about_skill_list_item">- {skill};</li>
                                    )
                                })}
                            </ul>
                        </div>)
                    })
                }

            </div>
            <p className="about_text">I want to work as a front-end developer, it doesn't make much difference if I work remotely or in an office, I just like this path and I am happy to devote myself to it.  </p>
            <img className="about_img" width='700' height='500' src="/photos/reading.jpg" alt="I'm reading" />
            <figcaption className="about_figcaption">I'm reading my favorite "flat world" book series.</figcaption>
            <h3 className="about_skill_header">About me:</h3>
            <p className="about_text">I am currently studying at the Minsk College of Entrepreneurship, specializing in Software of Information Technologies on the 3rd year. I speak Russian, Belarusian , English , I am also studying Polish.</p>
            <h3 className="about_skill_header">My hobbies: </h3>
            <ul className="about_skill_list">
                {skills.hobby.map(skill => {
                    return (
                        <li key={skill} className="about_skill_list_item">- {skill};</li>
                    )
                })}
            </ul>
        </section>
    )
}

export default About