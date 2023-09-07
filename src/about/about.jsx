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
    hard: ['Java Script', 'HTML', 'CSS', 'React', 'Redux', 'Git'],
    dealWith: ['C++', 'Python', 'NodeJS', 'MongoDB', 'Figma'],
    soft: ['Communication skills', 'Creative thinking', 'Purposefulness', 'Ability to work in a team', 'Stress tolerance', 'Attention to detail', 'Multitasking']
}

const About = () => {
    return (
        <section className="about_section">
            <h3 className="about_title">Howdy! 👋</h3>
            <p className="about_text">My name is Mikhail. At the moment I am a specialized Front-end developer. This section presents my skills and expectations.</p>

            <div className="about_skill_list_container">
                <div>
                    <h3 className="about_skill_header">Hard skills</h3>
                    <ul className="about_skill_list">
                        {skills.hard.map(skill => {
                            return (
                                <li key={skill} className="about_skill_list_item">- {skill};</li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <h3 className="about_skill_header">Also dealt with</h3>
                    <ul className="about_skill_list">
                        {skills.dealWith.map(skill => {
                            return (
                                <li key={skill} className="about_skill_list_item">- {skill};</li>
                            )
                        })}
                    </ul>
                </div>

            </div>

            <img className="about_img" width='700' height='500' src="/photos/reading.jpg" alt="I'm reading" />
            <figcaption className="about_figcaption">I'm reading my favorite "flat world" book series.</figcaption>
            <p className="about_text">In my free time from programming, I, along with my rock band, make music. </p>
            <p className="about_text"> As for code, I love digging into React, creating interesting design with CSS and HTML. I have a track record of creating compelling projects ahead of deadlines. That said, I have an eye for design, accessibility, performance, and well-structured code.</p>
            <p className="about_text">In addition to building websites, I enjoy learning new React libraries, programming literature, and building efficient algorithms</p>
            <p className="about_text">Contact me and say "Hi!". I'd love to hear from you!</p>
        </section>
    )
}

export default About