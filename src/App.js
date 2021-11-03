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
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/project/:category' children={<ProjectCategory isSmall={isSmall} height={height} width={width} />} />
        <Route path='/project'>
          <ProjectMain isSmall={isSmall} height={height} width={width} />
        </Route>
        <Route path='/about-me'>
          <AboutMe isSmall={isSmall} height={height} width={width} />
        </Route>
        <Route path='/'>
          <Home isSmall={isSmall} height={height} width={width} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
