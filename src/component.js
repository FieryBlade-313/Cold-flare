import React, { useState, useEffect, createRef } from 'react';
import './mainStyle.css';
import avatar from './Avy 1(Enlarged).jpeg';
import bgVideo from './Media/Video/Background/testVideo.mp4';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useHistory, useLocation } from "react-router-dom";
import { GetRandomGameMessage } from './auxilaryFunctions';


const NavigatorChecker = (path, curr) => {
    return path !== curr;
}

const HeaderBarComponents = (props) => {
    const hoverColor = "#0E1621";
    const defColor = "#305656";
    const [color, setColor] = React.useState(defColor);
    const maxWidth = 6;
    const [width, setWidth] = React.useState(0);

    const buttonStyle = {
        position: "absolute",
        right: props.width * props.index + "px",
        top: "0px",
        fill: color,
        opacity: "0.9",
        stroke: "#BDBDBD",
        strokeWidth: width,
    };

    const defSize = "12px";
    const hoverSize = "15px";

    const textStyle = {
        position: "absolute",
        right: props.width * props.index + "px",
        top: "0px",
        height: "auto",
        width: props.width + "px",
        textAlign: "center",
        color: "#BDBDBD",
        pointerEvents: "none",
        lineHeight: (props.height) + "px",
        fontFamily: '"Russo One", "sans-serif"',
        fontSize: (color === hoverColor ? hoverSize : defSize),

    }

    let history = useHistory();
    let location = useLocation();


    return (
        <div>
            <svg className="headerButton"
                onMouseEnter={() => { setColor(hoverColor); setWidth(maxWidth) }}
                onMouseLeave={() => { setColor(defColor); setWidth(0) }}
                onClick={() => props.pushPath && NavigatorChecker(props.pushPath, location.pathname) && clearTimeout(t) & history.push(props.pushPath)}
                style={buttonStyle}
                height={props.height + (props.index) * props.width * Math.tan(props.angle * Math.PI / 180)} width={props.width}>
                <path
                    d={"M0 0 L" + props.width + " 0 L" + props.width + " " + (props.height + (props.index) * props.width * Math.tan(props.angle * Math.PI / 180)) + " L" + (props.index === 2 ? props.offset : 0) + " " + (props.height + (props.index - 1) * props.width * Math.tan(props.angle * Math.PI / 180)) + "Z"}
                />
            </svg>
            <div style={textStyle}>{props.title}</div>
        </div>
    );
};

const HeaderBar = (props) => {

    const titleArray = [
        {
            name: "About Me",
            pushPath: '/about-me',
        },
        {
            name: "My Projects",
            pushPath: '/project',
        },
        {
            name: "Home",
            pushPath: '/',
        }
    ];
    return (
        <div>
            {titleArray.map((titleData, index) => {
                return <HeaderBarComponents key={index} height={props.height} width={props.width} angle={props.angle} offset={props.offset} index={index} title={titleData.name} pushPath={titleData.pushPath} />
            })}
        </div>
    );
};

const HeaderBarBack = (props) => {
    return (
        <svg
            style={
                {
                    position: "absolute",
                    right: 0,
                    top: 0,
                    fill: "#272B2B",
                    opacity: "0.5",
                    zIndex: "-1",
                }
            }
            height={props.height} width={3 * props.width}>
            <path
                d={"M0 0 L" + 3 * props.width + " 0 L" + 3 * props.width + " " + (props.height + 3 * props.width * Math.tan(props.angle * Math.PI / 180)) + " L" + props.offset + " " + props.height + "Z"}
            />
        </svg>
    );
};

const ContentBox = (props) => {
    return (
        <svg style={{
            position: 'absolute',
            bottom: "0px",
            right: "0px",
            pointerEvents: "none",
            // fill: props.fillColor,
            fill: props.texturedFill ? "url(#gradient)" : props.fillColor,
            opacity: props.opacity,
        }}
            height={props.height}
            width={props.width}
        >
            <defs>
                <linearGradient id="gradient" x1="6%" y1="4%" x2="2%" y2="8%" spreadMethod="repeat">
                    <stop offset="0%" stopColor={props.fillColor} />
                    <stop offset="10%" stopColor={props.fillColor} />
                    <stop offset="15%" stopColor="black" />
                    <stop offset="20%" stopColor="black" />
                    <stop offset="50%" stopColor={props.fillColor} />
                    <stop offset="60%" stopColor={props.fillColor} />
                    <stop offset="65%" stopColor="black" />
                    <stop offset="70%" stopColor="black" />
                    <stop offset="100%" stopColor={props.fillColor} />
                </linearGradient>
            </defs>
            <path d={"M" + props.offset + " 0 L" + props.width + " 0 L" + props.width + " " + props.height + " L0 " + props.height + "Z"} />
        </svg>
    );
};

const TextContent = (props) => {
    return (
        <p className={props.styleName} style={{
            color: '#D9D9D9',
            fontSize: props.size,
            fontWeight: props.fontWt || "normal",
            fontFamily: props.fontType,
            margin: "25px",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
        }}>{props.val}</p>
    );
}

const TextComponent = () => {
    return (
        <div className="textBlock" style={{
            textAlign: "right",

        }}>
            <TextContent styleName="textTagLine" val={" \u201CLet's Explore Together\u201D"} fontType='Russo One' />
            <TextContent styleName="textIntro" val={"An individual who loves to explore stuff.\n I am interested in Game Dev and Digital Art."} fontType='Roboto Mono' fontWt="bold" />
            <TypeWriterEffect headerMessage='Currently Exploring - ' wordList={["Vulkan", ", ", "Behaviour Tree"]} />
        </div>
    );
}

const TextCursor = () => {
    const parameters = {
        toggleDelay: 150,
    }
    const [isVisible, setVisibleStatus] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisibleStatus(!isVisible)
        }, parameters.toggleDelay)
        return () => clearTimeout(timer)

    });

    return (
        <p style={{
            display: "inline",
            opacity: isVisible ? 1 : 0,
        }}>
            {"_"}
        </p>
    );
}

const TypeWriterEffect = (props) => {
    const parameters = {
        typingSpeed: 200,
        newWordBreak: 500,
        endDelay: 1000,
    };
    const [text, setText] = useState('');
    const [stringIterator, setStringIterator] = useState(0);
    const [wordIterator, setWordIterator] = useState(0);
    const [delayTime, setDelayTime] = useState(parameters.typingSpeed);
    const [resetString, setStringReset] = useState(false);

    const handleTyping = () => {
        if (resetString) {
            setText('');
            setStringReset(false);
        }
        else {

            setText(text + props.wordList[wordIterator][stringIterator]);
            setStringIterator(stringIterator + 1);

            if (stringIterator === props.wordList[wordIterator].length - 1) {

                setStringIterator(0);
                setWordIterator(wordIterator + 1);
                setDelayTime(parameters.newWordBreak);
                if (wordIterator === props.wordList.length - 1) {
                    setWordIterator(0);
                    setDelayTime(parameters.endDelay);
                    setStringReset(true);
                }

            }
            else
                setDelayTime(parameters.typingSpeed);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handleTyping()
        }, delayTime)
        return () => clearTimeout(timer)
    });


    return (
        <div style={{
            width: "80%",
            margin: "10%",
            textAlign: "left",
            wordBreak: "break-word",
            fontSize: (props.isSmall ? "1.2em" : "1.4em"),
            fontFamily: "League Spartan",
            color: "#1EAC68",
            textShadow: "0 4px 10px #000000",
        }} className="textCurrent">
            <p style={{ display: "inline", color: "#9E9F9F" }}>{props.headerMessage}</p> <p style={{ display: "inline" }}>{text}</p><TextCursor />
        </div>
    );
}

let t;

const AvatarImage = (props) => {

    const [showState, setShowState] = useState(false);
    const [messageValue, setMessageValue] = useState({ 'game': '', 'formatData': { 'prefix': '', 'suffix': '' } });
    const duration = 5;

    return (
        <div>
            <div style={{
                backgroundImage: `url('${avatar}')`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                borderRadius: "50%",
                boxShadow: "0 0 50px",
                margin: "25px 0",
            }}
                onClick={() => {
                    if (showState) {
                        setShowState(false);
                        clearTimeout(t);
                    }
                    else {
                        setShowState(true);
                        setMessageValue(GetRandomGameMessage());
                        t = setTimeout(() => setShowState(false), duration * 1000);
                    }
                }
                }
                className="avatarSize" />
            <MessageBox game={messageValue['game']} formatData={messageValue['formatData']} showState={showState} />
        </div>
    );
}

let videoTotalDuration = null;
// let frameLimit = 0;
let loaded = false;
let isScrollControlled = false;

// const setFrameLimit = (newLimit) => {
//     frameLimit = newLimit;
// }

const setLoadedState = (loadedState) => {
    loaded = loadedState;
}

const setScrollControl = (scrollControlledState) => {
    isScrollControlled = scrollControlledState;
}

const VideoBackground = () => {

    const [frameLimit, setframeLimit] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    // const [loaded, setLoadedState] = useState(false);
    // const [isScrollControlled, setScrollControl] = useState(false);
    const vid = createRef();
    const frameSkip = 120 / 60;
    const indicatorWidth = 200;

    const scrollPlay = (e) => {
        if (!isScrollControlled) {
            setScrollControl(true);
            setframeLimit(Math.max(0, Math.min(currentTime + frameSkip, vid.current.duration)));
        }
        else {

            const dir = e.deltaY * 0.01;
            if (loaded) {
                const newFrame = Math.max(0, Math.min(frameLimit + frameSkip * dir, vid.current.duration));
                setframeLimit(newFrame);
            }
        }
    }

    const GetIndicatorLength = () => {
        let resLength = 0;
        if (videoTotalDuration)
            resLength = indicatorWidth - (videoTotalDuration - currentTime) * indicatorWidth / videoTotalDuration;
        return resLength;
    }

    useEffect(() => {
        if (loaded) {
            const timer = setTimeout(() => {

                const dir = frameLimit > currentTime ? 1 : -1;
                let newCurrentTime = currentTime + dir / 60;
                switch (dir) {
                    case -1: newCurrentTime = Math.max(newCurrentTime, frameLimit); break;
                    case 1: newCurrentTime = Math.min(newCurrentTime, frameLimit); break;
                    default: ;
                }
                if (vid.current != null) {
                    vid.current.currentTime = newCurrentTime;
                    if (!videoTotalDuration)
                        videoTotalDuration = vid.current.duration;
                    setCurrentTime(newCurrentTime);
                }
            }, 1000 / 50);

            return () => clearTimeout(timer);
        }
    }, [frameLimit, currentTime, vid])

    return (
        <div>
            <video ref={vid} className="abstractVideo" onLoadedMetadata={() => { setLoadedState(true); setframeLimit(vid.current.duration); }} muted onWheel={(e) => scrollPlay(e)}>
                <source src={bgVideo} type='video/mp4' />
            </video>
            {/* <span className='indicator'>
                <div style={{
                    width: indicatorWidth + 'px',
                }} className='indicatorBack'>
                    <div style={{
                        width: GetIndicatorLength() + 'px',
                    }} className='indicatorMain'></div>
                </div>
            </span> */}
        </div>
    );
}

const ContactButton = () => {
    return (
        <div className='buttonDim contact' >Contact</div>
    );
}

const ResumeButton = () => {
    return (
        <div className='buttonDim resume' >Resume</div>
    );
}

const WaveSVG = (props) => {
    const offset = 20;
    return (
        <div>
            <svg className="wavepath" style={{
                fill: props.color2,
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: '-2',
                pointerEvents: 'none',
            }} height={2 * props.height1} width={props.width}>
                <path d={`M 0,${props.height1 + offset} c ${props.width * 0.3},${props.height1} ${props.width * 0.7},${-(props.height1 + offset) * 0.6} ${props.width},${props.height2 - props.height1 - offset} l 0,${-props.height2} l ${-props.width},0`} />
            </svg>
            <svg className="wavepath" style={{
                fill: props.color1,
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: '-2',
                pointerEvents: 'none',
            }} height={2 * props.height1} width={props.width}>
                <path d={`m 0,${props.height1} c ${props.width * 0.3},${props.height1} ${props.width * 0.7},${-props.height1 * 0.6} ${props.width},${props.height2 - props.height1} l 0,${-props.height2} l ${-props.width},0`} />
            </svg>
            <div className="wavepath" style={{
                position: 'absolute',
                top: '0',
                left: '0',
                padding: '75px',
                fontFamily: 'League Spartan',
                color: '#E9E9E9',
                fontSize: '2em'
            }}>{props.title}</div>
        </div>
    );

}

const WaveSVGSml = (props) => {
    return (
        <div className="wavepathSml"
            style={{
                position: 'absolute',
                top: '88px',
                padding: '25px 0',
                width: '100%',
                backgroundColor: props.color1,
                textAlign: 'center',
                lineHeight: '80px',
                fontFamily: 'League Spartan',
                color: '#E9E9E9',
                fontSize: '2em',
                borderBottom: '10px solid ' + props.color2,
            }}>{props.title}</div>
    );
}

const CategoryButton = ({ categoryName }) => {

    let history = useHistory();
    let location = useLocation();

    const pushPath = `/project/${categoryName}`;

    return (
        <span
            className="categoryButton"
            onClick={() => NavigatorChecker(pushPath, location.pathname) && history.push(pushPath)}>
            {categoryName}
        </span>
    );
}

const ProjectImageBlock = (props) => {
    const settings = {
        infinite: true,
        dots: true,
        lazyLoad: false,
        fade: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "ease-in",
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: false,
    };
    const imageUnits = props.projectImage.map((mediaBlock, i) => {
        if (mediaBlock['type'] === 'video') {
            return (
                <video key={i} className='projectVideo' muted autoPlay loop>
                    <source src={mediaBlock['media']} type='video/mp4' />
                </video>);
        }
        else
            return <img className='projectImage' src={mediaBlock['media']} key={i} alt={'image'.concat(i.toString())} ></img>
    });
    return (
        <Slider {...settings}>
            {imageUnits}
        </Slider>
    );
}

const ProjectUnit = (props) => {

    const categoryBlock = props.category.map((category, index) => <ProjectCategory key={index} text={category} />)

    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            whiteSpace: "pre-wrap",
        }}>
            <span style={{
                fontFamily: `'League Spartan', sans-serif`,
                fontSize: '2em',
                fontWeight: 'bold',
                margin: '15px 0 15px 50px',
            }}>{props.projectTitle}</span>
            <span style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                margin: '5px 50px',
            }}>
                {categoryBlock}
            </span>
            <span style={{
                fontFamily: `'Montserrat', sans-serif`,
                fontSize: '1em',
                fontWeight: 'regular',
                margin: '15px 50px',
            }}>{props.projectContent}</span>
            <span className='projectImageParent'>
                <ProjectImageBlock projectImage={props.projectImage} />
            </span>
        </div >
    );
}

const ProjectCategory = (props) => {

    return (
        <div style={{
            padding: '5px 10px',
            borderRadius: '5px',
            backgroundColor: '#26745a',
            color: '#fff',
            textAlign: 'center',
            minWidth: '30px',
            margin: '0 8px 8px 0',
        }}>
            {props.text}
        </div>
    );
}

const MessageBox = ({ game, formatData, showState }) => {

    const prefix = formatData['prefix'].concat(formatData['prefix'] !== '' ? ' ' : '');
    const suffix = (formatData['suffix'] !== '' ? ' ' : '').concat(formatData['suffix']);

    return (
        <div style={{
            position: 'absolute',
            top: '10px',
            transform: `translateY(${showState ? -100 : 0}%)`,
            opacity: showState ? 1 : 0,
            transitionDuration: showState ? '0.4s' : '0.15s',
        }} className="avatarMessageDecorator">{prefix}<span className="avatarMessageMain">{game}</span>{suffix}</div>
    );
}

const AboutPassage = () => {
    return (
        <div style={{
            textAlign: 'justify',
            fontFamily: 'Montserrat',
            padding: '30px 50px'
        }} className='aboutPassageHolder'>
            <p >So, Ummm, about me, well I am a person who enjoys playing games and programming. Gaming was the catalyst for me getting interested in programming. While I pursued these interests, I learnt about other amazing things, like
                <span style={{ fontWeight: '600', color: '#2e2e2e' }}> Web & App Development, Game Developement, Artificial Intelligence, Reinforcement Learning & Deep Learning </span>. I also found an interest in <span style={{ fontWeight: '800', color: '#b1305b' }}>Digital Art, Vector Art & 3D Modelling</span>.
                <br /><br />
                In my free time, I sometimes write poetry in Hindi & Urdu. I also engage myself in drawing something. Another thing that I usually do is build some contraptions in Minecraft.</p>
            <br />
            <br />
            <br />
            <p className='boldClass'>Some secret features in the website:</p>
            <span style={{
                fontSize: '0.9em',
            }}>
                <li style={{ margin: '10px' }}>If you have a device with a scroll wheel(mouse wheel), you can use it to control the video in the Home Page.</li>
                <li style={{ margin: '10px' }}>Click on my character avatar on the Home page to get a game suggestion.</li>
            </span>
        </div >
    );
}

export {
    HeaderBar,
    HeaderBarBack,
    ContentBox,
    TextComponent,
    AvatarImage,
    VideoBackground,
    ContactButton,
    ResumeButton,
    WaveSVG,
    WaveSVGSml,
    CategoryButton,
    ProjectUnit,
    AboutPassage,
}