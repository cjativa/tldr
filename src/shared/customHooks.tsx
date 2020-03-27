import { useEffect, useState } from 'react';

/** Executes a provided function when enter key is pressed */
export const useEnterPress = (updateOnEnter) => {
    
    const keyPressListener = ({ code }) => {
        if (code === "Enter" || code === "NumpadEnter") {
            updateOnEnter(true);
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
}

/** */