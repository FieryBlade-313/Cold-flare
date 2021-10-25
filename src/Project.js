import {
    HeaderBarBlock,
    WaveSVGBlock,
    CategoryBlock,
    WaveMainContent,
} from './componentBlock'

const ProjectMain = ({ isSmall, width, height }) => {
    return (
        <div>
            <HeaderBarBlock isSmall={isSmall} width={width} height={height} />
            <WaveSVGBlock width={width} />
            <WaveMainContent child={< CategoryBlock height={height}/>} />
        </div>
    );
}

export default ProjectMain;