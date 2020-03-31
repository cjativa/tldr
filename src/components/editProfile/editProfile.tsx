import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { useEnterPress, useOnInput } from '../../shared/customHooks';

export const EditProfile = () => {

    const menuLinks = [
        { primaryText: 'About', subText: 'Tell others what you\'re all about', slug: 'about', component: About },
        { primaryText: 'More Details', subText: 'Add your interests, profession, and more', slug: 'more', component: More },
        { primaryText: 'Connections', subText: 'Link to your social profiles', slug: 'connections', component: Connections }
    ]

    return (
        <div className="edit-profile">
            <div className="edit-profile__content">
                <div className="ep-menu">
                    <ul className="ep-menu__list">
                        {menuLinks.map((ml, index) => {
                            return (
                                <li className="ep-menu__item" key={index}>
                                    <Link to={`/edit-profile/${ml.slug}`}>
                                        <p>{ml.primaryText}</p>
                                        <p className="sub">{ml.subText}</p>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="ep-display">
                    <Switch>
                        {menuLinks.map((ml, index) => <Route key={index} path={`/edit-profile/${ml.slug}`} component={ml.component} />)}
                        <Redirect to="/edit-profile/about" />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

const About = () => {
    return (
        <div className="about">
            <p>About</p>
            <div className="about__sections">
                {/** Title section */}
                <div className="about__section">
                    <p>Title(s)</p>
                    <p className="subtitle">Add up to three titles that describe who you are and what you do.</p>
                    <input type="text" placeholder="Journalist extraordinaire..." />
                </div>
                {/** Headline section */}
                <div className="about__section">
                    <p>Headline</p>
                    <p className="subtitle">A brief, descriptive sentence detailing what you do, your mission, or purpose.</p>
                    <textarea rows={2} placeholder="A journalist by day, technology conniseur by night, endeavoring to have a meaningful impact through insightful reporting on day-to-day matters." />
                </div>
                {/** Summary section */}
                <div className="about__section">
                    <p>Summary</p>
                    <p className="subtitle">Start with one of the suggestions below or make it your own.</p>
                    <div></div>
                </div>
            </div>
        </div>
    )
}


const More = () => {

    const [interests, modifyInterests] = useState([]);
    const [skills, modifySkills] = useState([]);

    const addInterest = () => {
        modifyInterests([...interests, interest]);
        resetInterest();
    }

    const addSkill = () => {
        modifySkills([...skills, skill]);
        resetSkill();
    }

    const { value: interest, bind: bindInterests, reset: resetInterest } = useOnInput('', addInterest);
    const { value: skill, bind: bindSkills, reset: resetSkill } = useOnInput('', addSkill);







    return (
        <div className="more">
            <p>More Details</p>
            <div className="more__sections">

                {/** Your day-to-day */}
                {/** Location section*/}
                <div className="more__section">
                    <p>Location</p>
                    <p className="subtitle">Where do you make the magic happen?</p>
                    <input type="text" placeholder="City, State" />
                </div>
                {/** Occupation section*/}
                <div className="more__section">
                    <p>Occupation</p>
                    <p className="subtitle">Enter your role and company.</p>
                    <input type="text" placeholder="Editor-in-Chief" />
                    <input type="text" placeholder="The Daily Bugle" />
                </div>

                {/** Some more about you */}

                {/** Interests section */}
                <div className="more__section">
                    <p>Interests</p>
                    <p className="subtitle">Enter a few interests you're passionate about.</p>
                    <input type="text" name="interests" placeholder="Add your interests and passions" {...bindInterests} />
                    {interests.length > 0 &&
                        <ul>
                            {interests.map((interest) => <li>{interest}</li>)}
                        </ul>
                    }
                </div>

                {/** Skills section*/}
                <div className="more__section">
                    <p>Skills and Talents</p>
                    <p className="subtitle">Enter technologies, practices, or anything you're proficient in.</p>
                    <input type="text" name="skills" placeholder="Add some of your skills and talents" {...bindSkills} />
                    {skills.length > 0 &&
                        <ul>
                            {skills.map((skill) => <li>{skill}</li>)}
                        </ul>
                    }
                </div>

            </div>
        </div>
    )
}


const Connections = () => {
    return (
        <div className="connections">
            <p>Connections</p>
        </div>
    )
}