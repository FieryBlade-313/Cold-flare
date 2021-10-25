import { useState, useEffect } from 'react';
import projectData from './Data/data.json';
import gameData from './Data/game.json';
import messageDecoratorData from './Data/message.json';

//import images
import FacePortraitWoman from './Media/Images/Face Portrait/Final.jpg';
import FacePortraitWomanSolo from './Media/Images/Face Portrait/Final_solo.jpg';
import DailyHealthz from './Media/Images/Logo/Daily Healthz card.png';
import MelleCard from './Media/Images/Logo/melle_card.png';
import MelleRender from './Media/Images/Logo/melle_render.jpg';
import Waneur from './Media/Images/Logo/waneur_logo.png';
import PirateScene from './Media/Images/Pirate Scene/Pirate Scene setup.png';
import Pirate2DAnimation from './Media/Images/Pirate Scene/preko_anim.gif';
import Shipwreck from './Media/Images/Pirate Scene/shipwreck.png';
import TheWoods from './Media/Images/The woods/man in the woods.png';

const categorySet = new Set();

const GenerateCategories = () => {
    projectData['data'].forEach(data => {
        data.category.forEach(category => {
            categorySet.add(category);
        })
    });
}

const ImageMap = {
    'face_portrait': FacePortraitWoman,
    'face_portrait_solo': FacePortraitWomanSolo,
    'daily_healthz': DailyHealthz,
    'melle_card': MelleCard,
    'melle_render': MelleRender,
    'waneur': Waneur,
    'pirate_scene': PirateScene,
    'pirate_anim': Pirate2DAnimation,
    'shipwreck': Shipwreck,
    'the_woods': TheWoods,
}

const GetImageComponent = (image_key) => {
    return image_key.map((key) => ImageMap[key]);
}

const GetRandomArrayValue = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const GetRandomGameMessage = () => {
    let res = {
        'game': GetRandomArrayValue(gameData['data']),
        'formatData': GetRandomArrayValue(messageDecoratorData['data'])
    };
    return res;
}

function GetWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function UseWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(GetWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(GetWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

function GetCategories() {
    return [...categorySet];
}

function GetProjects(dataFilter) {
    let filterProjects = dataFilter ? projectData['data'].filter((project) => {
        return project['category'].includes(dataFilter);
    }) : projectData['data'];

    return filterProjects;
}

export {
    UseWindowDimensions,
    GetCategories,
    GetProjects,
    GenerateCategories,
    GetImageComponent,
    GetRandomGameMessage,
}