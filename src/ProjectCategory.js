import {
    HeaderBarBlock,
    WaveSVGBlock,
    ProjectCategoryBlock,
    WaveMainContent,

} from './componentBlock'

import {
    useParams,
} from 'react-router-dom';

const ProjectCategory = ({ isSmall, width, height }) => {

    let { category } = useParams();
    return (
        <div>
            <HeaderBarBlock isSmall={isSmall} width={width} height={height} />
            <WaveSVGBlock width={width} />
            <WaveMainContent child={<ProjectCategoryBlock category={category} />} />
        </div>
    );
}

export default ProjectCategory;