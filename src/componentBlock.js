import {
    HeaderBar,
    HeaderBarBack,
    ContentBox,
    TextComponent,
    AvatarImage,
    VideoBackground,
    ContactButton,
    ResumeButton,
    WaveSVG,
    WaveSVGSml,
    CategoryButton,
    ProjectUnit,
} from './component'
import { GetCategories, GetProjects, GetImageComponent } from './auxilaryFunctions'

const TextAndImageBlock = (props) => {

    // const { height, width } = useWindowDimensions();

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            position: 'absolute',
            top: (props.height > 550 ? (props.height - 400) : 290) + "px",
            right: '0',
            margin: '0 25px',
        }}>
            <TextComponent isSmall={props.isSmall} />
            <AvatarImage isSmall={props.isSmall} />
        </div>
    );
}

const HeaderBarBlock = (props) => {

    // const { height, width } = useWindowDimensions();

    if (props.isSmall) {
        return (
            <div>
                <HeaderBar width={props.width / 3} height={80} angle={0} offset={0} />
                <HeaderBarBack width={props.width} height={88} angle={0} offset={0} />
            </div>
        );
    }
    else if (props.width < 800) {
        return (
            <div>
                <HeaderBar width={175} height={80} angle={0} offset={45} />
                <HeaderBarBack width={178} height={95} angle={-1} offset={40} />
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

    // const { height, width } = useWindowDimensions();

    if (props.isSmall) {
        return (
            <div>
                <ContentBox width={props.width} height={470} offset={0} fillColor="#171717" opacity="0.4" />
                <ContentBox width={props.width} height={400} offset={0} fillColor="#333333" opacity="0.3" />
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

const WaveSVGBlock = (props) => {
    return (
        <div>
            <WaveSVG height1={150} height2={140} width={props.width} color1="#2E4A4A" color2="#253131" title={props.title} />
            <WaveSVGSml height={80} color1="#3A5C5C" color2="#253131" title={props.title} />
        </div>
    );
}

const BgVideoBlock = () => {
    return (
        <VideoBackground />
    );
}

const ButtonBlock = ({ modalOpenState }) => {
    return (
        <div className='buttonHolder'>
            <ResumeButton />
            <ContactButton modalOpenState={modalOpenState} />
        </div>
    );
}

const CategoryBlock = ({ height }) => {

    const category = GetCategories().map((category, i) => <CategoryButton categoryName={category} key={i} />)
    return (
        <div style={{
            position: 'absolute',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
        }}>
            {category}
        </div>
    );
}

const ProjectCategoryBlock = ({ category }) => {

    const projects = GetProjects(category).map((project, index) => {
        return <ProjectUnit key={index} projectTitle={project['title']} projectContent={project['content']} category={project['category']} projectImage={GetImageComponent(project['media'])} />
    });

    return (
        <div>
            {projects}
        </div>
    );
}

const WaveMainContent = ({ child }) => {
    return (
        <div className={'WaveMainContent'}>
            {child}
        </div>
    );
}

export {
    TextAndImageBlock,
    HeaderBarBlock,
    TextContentBlock,
    BgVideoBlock,
    ButtonBlock,
    WaveSVGBlock,
    CategoryBlock,
    ProjectCategoryBlock,
    WaveMainContent,
};