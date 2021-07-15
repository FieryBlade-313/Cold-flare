import { HeaderBarBlock, TextContentBlock, TextAndImageBlock, BgVideoBlock, ButtonBlock, WaveSVGBlock } from './componentBlock'
import useWindowDimensions from './auxilaryFunctions'
import { CategoryButton } from './component'

function App() {

  const { height, width } = useWindowDimensions();

  const isSmall = width < 700;


  return (
    <div>
      <HeaderBarBlock isSmall={isSmall} width={width} height={height} />
      {/* <TextContentBlock isSmall={isSmall} width={width} height={height} /> */}
      {/* <TextAndImageBlock isSmall={isSmall} width={width} height={height} /> */}
      {/* <ButtonBlock /> */}
      {/* <BgVideoBlock /> */}
      <WaveSVGBlock width={width} />
      <div style={{
        position: 'relative',
        top: '300px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        < CategoryButton categoryName="Game Dev" />
        < CategoryButton categoryName="Gamdadadade Dev" />
        < CategoryButton categoryName="Game" />
        < CategoryButton categoryName="Game Dev" />
        < CategoryButton categoryName="Game Dev" />
        < CategoryButton categoryName="Game Dev" />
        < CategoryButton categoryName="Game Dev" />
        < CategoryButton categoryName="Game Dev" />
        < CategoryButton categoryName="Game Dev" />
        < CategoryButton categoryName="Game Dev" />
        < CategoryButton categoryName="Game Dev" />
        < CategoryButton categoryName="Game Dev" />
        < CategoryButton categoryName="Game Dev" />
      </div>
    </div>
  );
}

export default App;
