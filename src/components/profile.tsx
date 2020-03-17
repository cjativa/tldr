import React, { useState } from 'react';

import { ProfileCard } from './profileCard/profileCard';
import { ProfileBody } from './profileBody/profileBody';

export const Profile = () => {

    const [cardFocused, setCardFocus] = useState(null);

    const onCardClick = (cardFocused: boolean) => {
        setCardFocus(cardFocused);
    }

    return (
        <div className="profile">
            <ProfileCard onCardClick={onCardClick} />
            <ProfileBody cardFocused={cardFocused} />
        </div>
    );
}