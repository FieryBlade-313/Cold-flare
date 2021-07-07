import React, { useState, useEffect, createRef } from 'react';
import './mainStyle.css'
import avatar from './Avy 1(Enlarged).jpeg'
import bgVideo from './testVideo.mp4'

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

    return (
        <div>
            <svg className="headerButton"
                onMouseEnter={() => { setColor(hoverColor); setWidth(maxWidth) }}
                onMouseLeave={() => { setColor(defColor); setWidth(0) }}
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
    const titleArray = ["About Me", "My Projects", "Home"];
    return (
        <div>
            {[...Array(3)].map((e, i) => {
                return <HeaderBarComponents key={i} height={props.height} width={props.width} angle={props.angle} offset={props.offset} index={i} title={titleArray[i]} />
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

const AvatarImage = (props) => {
    const size = (props.isSmall ? "75px" : "100px");

    return (
        <div style={{
            backgroundImage: `url('${avatar}')`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            borderRadius: "50%",
            border: "2px solid gray",
            boxShadow: "0 0 50px",
            margin: "25px 0",
        }} className="avatarSize" />
    );
}

const VideoBackground = () => {

    const [frameLimit, setframeLimit] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [loaded, setLoadedState] = useState(false);
    const vid = createRef();
    const frameSkip = 10 / 60;

    const scrollPlay = (e) => {
        const dir = e.deltaY * 0.01;
        if (loaded) {
            // console.log(frameLimit, vid.current.duration);
            const newFrame = Math.max(0, Math.min(frameLimit + frameSkip * dir, vid.current.duration));
            setframeLimit(newFrame);
        }
    }

    useEffect(() => {
        if (!loaded)
            setLoadedState(true);
        if (loaded) {
            const timer = setTimeout(() => {
                console.log(frameLimit, currentTime)
                const dir = frameLimit > currentTime ? 1 : -1;
                let newCurrentTime = currentTime + dir / 60;
                switch (dir) {
                    case -1: newCurrentTime = Math.max(newCurrentTime, frameLimit); break;
                    case 1: newCurrentTime = Math.min(newCurrentTime, frameLimit); break;
                    default: ;
                }
                if (vid.current != null) {
                    vid.current.currentTime = newCurrentTime;
                    setCurrentTime(newCurrentTime);
                }
            }, 1000 / 50);
            return () => clearTimeout(timer);
        }
    }, [loaded, frameLimit, currentTime, vid])

    return (
        <video ref={vid} className="abstractVideo" muted onWheel={(e) => scrollPlay(e)}>
            <source src={bgVideo} type='video/mp4' />
        </video>
    );
}

export { HeaderBar, HeaderBarBack, ContentBox, TextComponent, AvatarImage, VideoBackground }