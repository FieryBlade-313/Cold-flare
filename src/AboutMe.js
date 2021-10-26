import {
    HeaderBarBlock,
    WaveSVGBlock,
    WaveMainContent,
} from './componentBlock';

import {
    AboutPassage
} from './component';

const AboutMe = ({ isSmall, width, height }) => {
    return (
        <div>
            <HeaderBarBlock isSmall={isSmall} width={width} height={height} />
            <WaveSVGBlock width={width} title={"About Me"} />
            <WaveMainContent child={<AboutPassage />} />
        </div>
    );
}

export default AboutMe;