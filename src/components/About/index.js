import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";
function About () {
    return (
        <section className="my-5">
            <hi id="about">Who am I?</hi>
            <img src={coverImage} className="my-2" style={{ width: "100%"}} alt="cover"/>
        </section>
        
    );
}

export default About;