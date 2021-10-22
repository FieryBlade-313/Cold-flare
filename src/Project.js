import {
    HeaderBarBlock,
    WaveSVGBlock,
    CategoryBlock,
} from './componentBlock'

const ProjectMain = ({ isSmall, width, height }) => {
    return (
        <div>
            <HeaderBarBlock isSmall={isSmall} width={width} height={height} />
            <WaveSVGBlock width={width} />
            < CategoryBlock />
        </div>
    );
}

export default ProjectMain;