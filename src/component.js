import React, { useState, useEffect } from 'react';
import './mainStyle.css';

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
            fill: props.fillColor,
            opacity: props.opacity,
        }}
            height={props.height}
            width={props.width}
        >
            <path d={"M" + props.offset + " 0 L" + props.width + " 0 L" + props.width + " " + props.height + " L0 " + props.height + "Z"} />
        </svg>
    );
};

const TextContent = (props) => {
    return (
        <p style={{
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
        <div style={{
            position: 'absolute',
            top: "42%",
            right: "150px",
            width: "500px",
            textAlign: "right",

        }}>
            <TextContent val={" \u201CLet's Explore Together\u201D"} size="2em" fontType='Russo One' />
            <TextContent val={"An individual who loves to explore stuff.\n I am interested in Game Dev and Digital Art."} size="1em" fontType='Roboto Mono' fontWt="bold" />
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
        <p style={{ display: "inline" }}>
            {isVisible ? "_" : ""}
        </p>
    );
}

const TypeWriterEffect = (props) => {
    const parameters = {
        typingSpeed: 200,
        newWordBreak: 400,
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

            // console.log(stringIterator, wordIterator, props.wordList[wordIterator].length);
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
        <div>
            <p style={{ display: "inline" }}>{props.headerMessage}</p> <p style={{ display: "inline" }}>{text}</p> <TextCursor />
        </div>
    );
}

const ExploringText = (props) => {
    return (
        <TypeWriterEffect headerMessage='Currently Exploring :' wordList={["Vulkan, ", "Behaviour Tree"]} />
    );
}
export { HeaderBar, HeaderBarBack, ContentBox, TextComponent, ExploringText }