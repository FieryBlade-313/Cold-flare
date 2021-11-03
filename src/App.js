import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ProjectMain from './Project';
import Home from './Home';
import ProjectCategory from "./ProjectCategory";
import AboutMe from "./AboutMe";

import { UseWindowDimensions, GenerateCategories } from './auxilaryFunctions'

function App() {

  const { height, width } = UseWindowDimensions();

  const isSmall = width < 700;

  GenerateCategories();

  return (
    <Router>
      <Switch>
        <Route path='/Cold-flare/project/:category' children={<ProjectCategory isSmall={isSmall} height={height} width={width} />} />
        <Route path='/Cold-flare/project'>
          <ProjectMain isSmall={isSmall} height={height} width={width} />
        </Route>
        <Route path='/Cold-flare/about-me'>
          <AboutMe isSmall={isSmall} height={height} width={width} />
        </Route>
        <Route path='/Cold-flare' exact>
          <Home isSmall={isSmall} height={height} width={width} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
