import { useEffect, useState } from 'react';

/** Executes a provided function when enter key is pressed */
export const useEnterPress = () => {

    const [enterPressed, setPressed] = useState(null);

    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                setPressed(true);
            }
        };

        // Set up listener
        document.addEventListener("keydown", listener);

        // Remove listener on unmount
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, []);

    return enterPressed;
}

/** */