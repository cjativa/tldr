import React from 'react';

import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ProfileLinks = (props: any) => {

    const { connections } = props;

    return (
        <div className="profile-links">
            {/** Phone icon link */}
            {connections.phoneNumber && <FontAwesomeIcon icon={faPhoneAlt} />}

            {/** Email icon link */}
            {connections.email && <FontAwesomeIcon icon={faEnvelope} />}

            {/** LinkedIn icon link */}
            {connections.linkedIn && <FontAwesomeIcon icon={faLinkedinIn} />}

            {/** GitHub icon link */}
            {connections.gitHub && <FontAwesomeIcon icon={faGithub} />}

        </div>
    );
}