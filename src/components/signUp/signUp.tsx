import React, { useState } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEnterPress } from '../../shared/customHooks';

export const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(null);

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);

    const history = useHistory();

    const next = (caller: string, data) => {

        switch (caller) {
            case 'email':
                setEmail(data.email);
                history.push('/sign-up/password');
                break;

            case 'password':
                setPassword(data.password);
                history.push('/sign-up/name');
                break;

            case 'name':
                setFirstName(data.firstName);
                setLastName(data.lastName);
                break;
        }
    }

    return (
        <div className="sign-up">
            <div className="sign-up__panel">
                <Switch>
                    <Route path="/sign-up/email" exact render={() => <EmailPanel next={next} email={email} />} />
                    <Route path="/sign-up/password" render={() => <PasswordPanel next={next} />} />
                    <Redirect to="/sign-up/email" />
                </Switch>
            </div>
        </div>
    )
}

const NamePanel = (props) => {
    return (
        <div className="password-panel">
            <div className="form-section" >
                <div><FontAwesomeIcon icon={faKey} /></div>
                <p>Set a password</p>
                <input type="password" placeholder="Enter a password here" />
                <span>You'll log in using it</span>
            </div>
            <button className="btn" onClick={() => props.next()}>Next</button>
        </div>
    )
}

const PasswordPanel = (props) => {
    return (
        <div className="password-panel">
            <div className="form-section" >
                <div><FontAwesomeIcon icon={faKey} /></div>
                <p>Set a password</p>
                <input type="password" placeholder="Enter a password here" />
                <span>You'll log in using it</span>
            </div>
            <button className="btn" onClick={() => props.next()}>Next</button>
        </div>
    )
}

const EmailPanel = (props) => {

    const [email, setEmail] = useState('');

    /** Handle email submission */
    const submitEmail = () => {
        const emailIsValid = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email);
        emailIsValid && props.next('email', { email });
    };

    /** Handle on change and enter key press */
    const onChange = (event) => setEmail(event.target.value);
    useEnterPress() && submitEmail();

    return (
        <div className="email-panel">
            <div className="form-section" >
                <div><FontAwesomeIcon icon={faEnvelope} /></div>
                <p>Sign up using your email</p>
                <input type="email" placeholder="Enter your email here" value={email || props.email} onChange={onChange} />
                <span>We'll send a confirmation email here later</span>
            </div>
            <button className="btn" onClick={() => submitEmail()}>Next</button>
        </div>
    )
}

