import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

function getCategories() {
    const category = ["Game Developement", "Digital Art", "Logo Designing", "Shaders", "Web Development", "App Developement", "Game Art", "3D Modelling", "Sculpting", "On Going"];
    return category;
}

export {
    useWindowDimensions,
    getCategories,
}