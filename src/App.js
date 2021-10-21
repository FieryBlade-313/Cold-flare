import {
  HeaderBarBlock,
  TextContentBlock,
  TextAndImageBlock,
  BgVideoBlock,
  ButtonBlock,
  WaveSVGBlock,
  CategoryBlock,
} from './componentBlock'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { useWindowDimensions, GenerateCategories, GetImageComponent } from './auxilaryFunctions'
import { ProjectUnit } from './component'

const routes = [
  {
    path: "/",
    component: Sandwiches,
  },
  {
    path: "/categories",
    component: Tacos,
  }
];

function App() {

  const { height, width } = useWindowDimensions();

  const isSmall = width < 700;

  GenerateCategories();

  console.log(GetImageComponent(["ark_1", "ark_2"]));


  return (
    <div>
      {/* <HeaderBarBlock isSmall={isSmall} width={width} height={height} /> */}
      {/* <TextContentBlock isSmall={isSmall} width={width} height={height} /> */}
      {/* <TextAndImageBlock isSmall={isSmall} width={width} height={height} /> */}
      {/* <ButtonBlock /> */}
      {/* <BgVideoBlock /> */}
      {/* <WaveSVGBlock width={width} /> */}
      {/* < CategoryBlock /> */}
      {/* <ProjectUnit
        projectTitle="Arkenzha"
        projectContent={`\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum vestibulum mi a aliquam. Pellentesque nisl ligula, tempus id orci eu, imperdiet eleifend orci. Nulla ipsum quam, facilisis vel erat non, consequat semper erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc pharetra pretium tortor, in ultricies augue aliquet non. Nam a velit porta, suscipit est ac, porta turpis. Suspendisse potenti. Phasellus blandit mauris ligula, id cursus urna laoreet nec. Phasellus vitae lectus dapibus nisi vehicula sollicitudin in sit amet tellus. Nam eu porttitor augue, vel bibendum metus.
        Nam finibus felis non tempor egestas. Nulla accumsan sollicitudin tortor ut ultrices. Cras eleifend sagittis iaculis. Integer at consequat mauris, sit amet faucibus ipsum. Cras semper fringilla quam in egestas. Sed augue dolor, condimentum eget tellus quis, tempor scelerisque mauris. Aliquam eget nibh velit. Duis dictum tempus maximus. Pellentesque id felis volutpat, ultricies arcu vel, rhoncus tortor. Morbi tincidunt pretium malesuada. Fusce vel velit velit. Curabitur sed dolor leo. Fusce tincidunt egestas elit sagittis semper.`}
        category={["Game Dev", "2D"]}
        projectImage={GetImageComponent(['ark_1', 'ark_2'])}
      /> */}
    </div>
  );
}

export default App;
