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
import ElfoRoot from './Media/Images/Elfo Sera/root.png';
import ElfoUse from './Media/Images/Elfo Sera/use.png';
import PixelArtCharacter1 from './Media/Images/Pixel Art Generator/ex1.png';
import PixelArtCharacter2 from './Media/Images/Pixel Art Generator/ex2.png';
import PixelArtCharacter3 from './Media/Images/Pixel Art Generator/ex3.png';
import PixelArtCharacter4 from './Media/Images/Pixel Art Generator/ex4.png';
import PixelArtCharacter5 from './Media/Images/Pixel Art Generator/ex5.png';
import WitcherStatic from './Media/Images/Witcher 3/orig_wallpaper.png';
import WitcherVideo from './Media/Video/Witcher 3/video.mp4';
import RocketInjector from './Media/Video/Rocket Injector Visulizer/video.mp4'
import AgentPong from './Media/Video/Agent Pong/video.mp4'

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
    'elfo_root': ElfoRoot,
    'elfo_use': ElfoUse,
    'pixel_character_1': PixelArtCharacter1,
    'pixel_character_2': PixelArtCharacter2,
    'pixel_character_3': PixelArtCharacter3,
    'pixel_character_4': PixelArtCharacter4,
    'pixel_character_5': PixelArtCharacter5,
    'witcher_static': WitcherStatic,
    'witcher_video': WitcherVideo,
    'rocket_injector': RocketInjector,
    'agent_pong': AgentPong,
}

const GetImageComponent = (image_key) => {
    let res = image_key.map((key) => {
        return {
            'media': ImageMap[key['media']],
            'type': key['type']
        }
    });

    return res;
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