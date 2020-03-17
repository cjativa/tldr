import React, { useState, useEffect } from 'react';

import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ProfileLinks } from './profileLinks';

const firstName = 'Christopher';
const middleName = 'Daniel';
const lastName = 'Jativa';

const userTitles = [
    'Software Engineer',
    'Lead Web Developer',
    'Full-Stack Web Developer'
];

const connections = {
    email: 'christopher.jativa320@outlook.com',
    gitHub: 'cjativa',
    linkedIn: 'christopherjativa320',
    phoneNumber: '6313398637',
    website: 'jativa.me',
};

const locations = {
    city: 'Brentwood',
    state: 'NY'
};

const headline = "Software engineer endeavoring to have a meaningful impact through scalable and thoughtful solutions.";

export const ProfileCard = (props) => {

    const [cardFocused, setCardFocus] = useState(true);
    const [className, setClassName] = useState('profile-card');

    const toggleFocus = () => {
        console.log('toggling focus');
        const toggledFocus = !cardFocused;

        if (toggledFocus) setClassName('profile-card focus');
        else setClassName('profile-card unfocus');

        setCardFocus(toggledFocus);
        props.onCardClick(toggledFocus);
    }

    useEffect(() => {
        // After 1 second, transition upwards
        setTimeout(() => {
            toggleFocus();
        }, 1000);
    }, []);


    // Set up name value
    let name = '';
    if (firstName) name += firstName;
    if (middleName) name = name.concat(' ', middleName);
    if (lastName) name = name.concat(' ', lastName);

    // Set up titles
    const titles = userTitles.join(' | ');

    // Setup location
    let location = '';
    if (locations.city) location += locations.city;
    if (location.length > 0) location = `${locations.city}, ${locations.state}`;


    return (
        <div className={className} onClick={() => toggleFocus()}>

            {/** Profile card top section */}
            <div className="profile-card__header">
                <div className="profile-card__picture" />
                <div className="header__name-box">
                    <p className="profile-card__name">{name}</p>
                    <p className="profile-card__titles">{titles}</p>
                </div>
            </div>

            {/** Profile card middle section */}
            <p className="profile-card__headline">{headline}</p>

            {/** Profile card lower section */}
            <div className="profile-card__lower">
                <ProfileLinks connections={connections} />
                <div className="lower__location">
                    <FontAwesomeIcon icon={faMapPin} />
                    <p className="profile-card__location">{location}</p>
                </div>
            </div>
        </div>
    )
}