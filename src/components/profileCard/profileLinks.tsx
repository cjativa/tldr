import React, { useState, useRef } from 'react';

import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HoverableIcon = (props) => {

    const { value, icon, displaceRight } = props;
    const positionStyle = displaceRight ? 'right' : 'left';

    const spanRef = useRef(null);
    const [spanWidth, setSpanWidth] = useState(0);

    return (
        <div className={`hover-container ${positionStyle}`}>
            <div className={`hover-icon`} onMouseEnter={() => setSpanWidth(spanRef.current.offsetWidth)}><FontAwesomeIcon onMouseLeave={() => setTimeout(() => setSpanWidth(0), 200)} icon={icon} /></div>
            <div className={`hidden-value`} style={{ width: spanWidth }}><span style={{ width: spanWidth }} ref={spanRef}>{value}</span></div>
        </div >
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

export const ProfileLocation = (props: any) => {

    const { location } = props;

    return (
        <div className="profile-location">
            <HoverableIcon icon={faMapMarkerAlt} value={location} displaceRight={true} />
        </div>
    )
}