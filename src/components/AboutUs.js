import React from "react";
import '../styles/about.css';
import HomeImage from '../assets/img/shaker.jpeg';

function AboutUs() {
    return (
        <div className="about">
            <div className="about-container">
                <h2>About us</h2>
                <p>
                Hello, my name is Imanol Santiago and I am a passionate web developer. 
                I have a broad knowledge of HTML, CSS, JavaScript, and React, and I am committed 
                to creating responsive and user-friendly web applications. 
                Over the years, I have honed my skills to ensure that the websites I create look great 
                and function perfectly on any device, regardless of its screen size. 
                To me, web development is not just a job, but a craft that I continually strive to 
                improve upon. Every new project is an opportunity for me to push the boundaries of my 
                skills and learn something new. I believe in the power of the web to connect people and ideas, and it's a privilege to be a part of this ever-evolving industry.
                Whether I'm working on a small personal blog or a large corporate website, my goal is 
                always the same: to create a web experience that is engaging, intuitive, and responsive. Thank you for visiting my page, and feel free to reach out if you'd like to work together or learn more about me.
                </p>
            </div>
            <div className="img-container">
                <img src={HomeImage} alt='Cocktails bar'/>
            </div>
        </div>
    )
}

export default AboutUs;