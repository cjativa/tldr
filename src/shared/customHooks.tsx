import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

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

/** Provides state bindings for an input 
 * @param initialValue - string or number that should be the initial value for the input
 * @param callbackOnEnter - function that should be called back when an enter key is pressed (optional)
*/
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

/** Facilitates making requests to the API endpoint
 * @param config - Configuration for the request
 */
export const useAPIRequest = (config?: AxiosRequestConfig) => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        const makeRequest = async () => {

            const { url } = config;
            const apiConfig = { ...config, url: `/api/${url}`};

            try {
                const response = (await axios(apiConfig)).data;
                setResponse(response);
            }

            catch (error) {
                setError(error);
                console.log(`Error occurred executing ${config.method} request to ${config.url}`, error);
            }
        };

        makeRequest();
    }, []);

    return { response, error };
}