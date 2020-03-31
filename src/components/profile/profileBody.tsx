import React, { useEffect } from 'react';

// Should be separated into "I enjoy...", "At present...", and maybe "I hope to...in the future" sections for facilitating easier content sections
const paragraphs = [
    "Hi there. I'm Chris. I'm a software engineer living in Long Island, New York.",
    "I enjoy architecting solutions to real-world problems from a programming perspective with an eye for design.",
    "At present, I'm a lead web developer building scalable and intuitive applications through a full-stack approach using modern technologies."
];

const passions = ['Technology', 'Politics', 'Engineering', 'Reading', 'Art', 'Music'];
const skills = ['React', 'Amazon Web Services', ' TypeScript', 'NodeJS', 'Python', 'Ruby on Rails', 'MySQL', 'Elastic Search'];

const ending = "Catch me playing the guitar when I'm not doing some coding!";

const work = "The Barnes Foundation";
const education = "Stony Brook University";

export const ProfileBody = (props) => {

    const { cardFocused } = props;
    let className = '';

    if (cardFocused == null) className = 'profile-body faded';
    if (cardFocused == true) className = 'profile-body fade-out';
    if (cardFocused == false) className = 'profile-body fade-in';

    return (
        <div className={className}>
            <div className="content">
                {/** Display the paragraph content */}
                {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}

                {/** Passionate section */}
                <p>I'm really passionate about</p>
                <ul className="content__passions">
                    {passions.map((passion, index) => <li key={index}>{passion}</li>)}
                </ul>

                {/** Skills section */}
                <p>My talents and skills include</p>
                <ul className="content__skills">
                    {skills.map((skill, index) => <li key={index}>{skill}</li>)}
                </ul>

                {/** Activities section */}
                {ending && <p>{ending}</p>}

                {/** Work and Education section */}
                <div className="content__professional"></div>

            </div>
        </div>
    )
}