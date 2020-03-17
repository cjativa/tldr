import React from 'react';

import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HoverableIcon = (props) => {

    const { value, icon } = props;

    return (
        <div className="hover-icon">
            <FontAwesomeIcon icon={icon} />
            <div className="hidden-value">{value}</div>
        </div>
    )
}

export const ProfileLinks = (props: any) => {

    const { connections } = props;
    const { phoneNumber, email, linkedIn, gitHub } = connections;

    return (
        <div className="profile-links">
            {/** Phone icon link */}
            {phoneNumber && <HoverableIcon icon={faPhoneAlt} value={phoneNumber} />}

            {/** Email icon link */}
            {email && <HoverableIcon icon={faEnvelope} value={email} />}

            {/** LinkedIn icon link */}
            {linkedIn && <HoverableIcon icon={faLinkedinIn} value={linkedIn} />}

            {/** GitHub icon link */}
            {gitHub && <HoverableIcon icon={faGithub} value={gitHub} />}

        </div>
    );
}