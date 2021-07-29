import { HeaderBarBlock, TextContentBlock, TextAndImageBlock, BgVideoBlock, ButtonBlock, WaveSVGBlock, CategoryBlock } from './componentBlock'
import { useWindowDimensions } from './auxilaryFunctions'
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
      < CategoryBlock />
    </div>
  );
}

export default App;
