import { HeaderBar, HeaderBarBack, ContentBox, TextComponent, AvatarImage, VideoBackground } from './component'
import useWindowDimensions from './auxilaryFunctions'

const TextAndImageBlock = (props) => {

    const { height, width } = useWindowDimensions();

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            position: 'absolute',
            top: (height - 400) + "px",
            right: '0',
            margin: '0 25px',
        }}>
            <TextComponent isSmall={props.isSmall} />
            <AvatarImage isSmall={props.isSmall} />
        </div>
    );
}

const HeaderBarBlock = (props) => {

    const { height, width } = useWindowDimensions();

    if (props.isSmall) {
        return (
            <div>
                <HeaderBar width={width / 3} height={80} angle={0} offset={0} />
                <HeaderBarBack width={width} height={88} angle={0} offset={0} />
            </div>
        );
    }
    else {
        return (
            <div>
                <HeaderBar width={200} height={80} angle={0} offset={45} />
                <HeaderBarBack width={203} height={95} angle={-1} offset={40} />
            </div>
        );
    }
}

const TextContentBlock = (props) => {

    const { height, width } = useWindowDimensions();

    if (props.isSmall) {
        return (
            <div>
                <ContentBox width={width} height={470} offset={0} fillColor="#171717" opacity="0.4" />
                <ContentBox width={width} height={400} offset={0} fillColor="#333333" opacity="0.3" />
            </div>
        );
    }
    else {
        return (
            <div>
                <ContentBox width={510} height={470} offset={100} fillColor="#171717" opacity="0.4" />
                <ContentBox width={720} height={400} offset={80} fillColor="#333333" opacity="0.3" />
            </div>
        );
    }

}

const BgVideoBlock = () => {
    return (
        <VideoBackground />
    );
}

export {
    TextAndImageBlock,
    HeaderBarBlock,
    TextContentBlock,
    BgVideoBlock
};