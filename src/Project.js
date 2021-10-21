import {
    HeaderBarBlock,
    WaveSVGBlock,
    CategoryBlock,
} from './componentBlock'

const Home = ({ isSmall, width, height }) => {
    return (
        <div>
            <HeaderBarBlock isSmall={isSmall} width={width} height={height} />
            <WaveSVGBlock width={width} />
            < CategoryBlock />
        </div>
    );
}