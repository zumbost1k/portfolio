import React from "react";
import './about.css'

const About = () => {
    return (
        <section className="about_section">
            <h3 className="about_title">Howdy! 👋</h3>
            <p className="about_text">My name is Misha. I'm a Front-end developer who strives to make my dreams come true through code!</p>
            <p className="about_text">I adhere to the idea that programming is an art that helps you achieve great goals through lines of code.  I love spreading the word and showing people how to improve their skills.</p>
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