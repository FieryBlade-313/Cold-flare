import { useState, useEffect } from 'react';
import projectData from './data.json';
import ark_1 from './test_img.jpg'
import ark_2 from './Pirate_scene_setup.png'

const categorySet = new Set();

const GenerateCategories = () => {
    projectData['data'].forEach(data => {
        data.category.forEach(category => {
            categorySet.add(category);
        })
    });
}

const ImageMap = {
    'ark_1': ark_1,
    'ark_2': ark_2,
}

const GetImageComponent = (image_key) => {
    return image_key.map((key) => ImageMap[key]);
}

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
    return [...categorySet];
}

function getProjects() {
    return projectData;
}

export {
    useWindowDimensions,
    getCategories,
    getProjects,
    GenerateCategories,
    GetImageComponent,
}