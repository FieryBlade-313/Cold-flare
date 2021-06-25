import { HeaderBar, HeaderBarBack, ContentBox, TextComponent, AvatarImage } from './component'

const TextAndImageBlock = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            width: "675px",
            position: 'absolute',
            top: "42%",
            right: '0',
        }}>
            <TextComponent />
            <AvatarImage />
        </div>
    );
}

const HeaderBarBlock = () => {
    return (
        <div>
            <HeaderBar width={200} height={80} angle={0} offset={45} />
            <HeaderBarBack width={203} height={95} angle={-1} offset={40} />
        </div>
    );
}

const TextContentBlock = () => {
    return (
        <div>
            <ContentBox width={510} height={470} offset={100} fillColor="#171717" opacity="0.85" />
            <ContentBox width={720} height={400} offset={80} fillColor="#171717" opacity="0.75" />
        </div>
    );
}

export {
    TextAndImageBlock,
    HeaderBarBlock,
    TextContentBlock
};