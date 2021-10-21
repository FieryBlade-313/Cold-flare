import {
    HeaderBarBlock,
    TextContentBlock,
    TextAndImageBlock,
    BgVideoBlock,
    ButtonBlock,
} from './componentBlock'

const Home = ({ isSmall, width, height }) => {
    return (
        <div>
            <HeaderBarBlock isSmall={isSmall} width={width} height={height} />
            <TextContentBlock isSmall={isSmall} width={width} height={height} />
            <TextAndImageBlock isSmall={isSmall} width={width} height={height} />
            <ButtonBlock />
            <BgVideoBlock />
        </div>
    );
}