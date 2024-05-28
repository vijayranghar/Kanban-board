import { useEffect, useState } from "react";

export default function useLocalStorageHook(key, defaultValue) {
    const [value, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error(
                "Error reading localStorage key “" + key + "”:",
                error,
            );
            return defaultValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(
                "Error setting localStorage key “" + key + "”:",
                error,
            );
        }
    }, [key, value]);

    return [value, setValue];
}
