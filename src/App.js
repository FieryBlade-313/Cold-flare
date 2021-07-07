import { HeaderBarBlock, TextContentBlock, TextAndImageBlock, BgVideoBlock, ButtonBlock } from './componentBlock'
import useWindowDimensions from './auxilaryFunctions'

function App() {

  const { height, width } = useWindowDimensions();

  const isSmall = width < 700;

  return (
    <div>
      <HeaderBarBlock isSmall={isSmall} />
      <TextContentBlock isSmall={isSmall} />
      <TextAndImageBlock isSmall={isSmall} />
      <ButtonBlock />
      <BgVideoBlock />
    </div>
  );
}

export default App;
