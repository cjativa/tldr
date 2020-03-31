import { useEffect, useState } from 'react';

/** Executes a provided function when enter key is pressed
 * @params executeOnEnter - function to be executed when enter key is pressed, passing true as a parameter
 */
export const useEnterPress = (executeOnEnter?: (boolean) => void): boolean => {

    const [enter, updateEnter] = useState(null);

    const keyPressListener = ({ code }) => {
        if (code === "Enter" || code === "NumpadEnter") {
            updateEnter(true);

            // If a function was passed, call it
            executeOnEnter && executeOnEnter(true);
        }
    };

    useEffect(() => {
        // Set up listener
        document.addEventListener('keydown', keyPressListener);

        // Remove listener on unmount
        return () => {
            document.removeEventListener('keydown', keyPressListener);
        };
    }, []);
    return enter;
}

export const useOnInput = (initialValue: string | number, callbackOnEnter?: (any?) => any) => {

    const [value, setValue] = useState(initialValue);
    const reset = () => setValue('');
    const onChange = (event) => setValue(event.target.value);
    const onKeyPress = (event) => {
        if (callbackOnEnter && (event.key === 'Enter' || event.key === 'NumpadEnter')) {
            callbackOnEnter();
        }
    }

    return {
        value, setValue, reset,
        bind: { value, onChange, onKeyPress }
    };
}