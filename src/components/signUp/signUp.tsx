import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory, Redirect, useLocation } from 'react-router-dom';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEnterPress } from '../../shared/customHooks';

export const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const history = useHistory();
    const location = useLocation();

    const [submitState, setSubmit] = useState(false);

    const onChange = (event) => {

        const { value, name } = event.target;

        switch (name) {
            case 'email':
                setEmail(value);
                break;

            case 'password':
                setPassword(value);
                break;

            case 'firstName':
                setFirstName(value);
                break;

            case 'lastName':
                setLastName(value);
                break;
        }
    }


    const submit = () => {

        const caller = location.pathname;

        if (caller.includes('email')) {
            if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email)) {
                history.push('/sign-up/password');
            }
        }

        if (caller.includes('password')) {
            history.push('/sign-up/name');
        }

        if (caller.includes('name')) {
        }

    }


    useEnterPress(setSubmit);

    useEffect(() => {
        if (submitState) {
            submit();
            setSubmit(false);
        }
    }, [submitState]);


    return (
        <div className="sign-up">
            <div className="sign-up__panel">
                <Switch>
                    <Route path="/sign-up/email" exact render={() => <EmailPanel submit={submit} email={email} onChange={onChange} />} />
                    <Route path="/sign-up/password" render={() => <PasswordPanel submit={submit} />} />
                    <Route path="/sign-up/name" render={() => <NamePanel firstName={firstName} lastName={lastName} submit={submit} onChange={onChange} />} />
                    <Redirect to="/sign-up/email" />
                </Switch>
            </div>
        </div>
    )
}

const NamePanel = (props) => {
    const { onChange, submit, firstName, lastName } = props;

    return (
        <div className="password-panel">
            <div className="form-section" >
                <div><FontAwesomeIcon icon={faUser} /></div>
                <p>What's your name?</p>
                <input type="text" name="firstName" placeholder="First name" value={firstName} onChange={onChange} />
                <input type="text" name="lastName" placeholder="Last name" value={lastName} onChange={onChange} />
                <span>Using your real name helps others find you online</span>
            </div>
            <button className="btn" onClick={() => submit()}>Next</button>
        </div>
    )
}

const PasswordPanel = (props) => {
    const { onChange, submit, password } = props;

    return (
        <div className="password-panel">
            <div className="form-section" >
                <div><FontAwesomeIcon icon={faKey} /></div>
                <p>Set a password</p>
                <input type="password" name="password" placeholder="Enter a password here" value={password} onChange={onChange} />
                <span>You'll log in using it</span>
            </div>
            <button className="btn" onClick={() => submit()}>Next</button>
        </div>
    )
}

const EmailPanel = (props) => {
    const { email, onChange, submit } = props;

    return (
        <div className="email-panel">
            <div className="form-section" >
                <div><FontAwesomeIcon icon={faEnvelope} /></div>
                <p>Sign up using your email</p>
                <input type="email" name="email" placeholder="Enter your email here" value={email} onChange={onChange} />
                <span>We'll send a confirmation email here later</span>
            </div>
            <button className="btn" onClick={() => submit()}>Next</button>
        </div>
    )
}

