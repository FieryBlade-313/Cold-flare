// import { ExploringText } from './component';
import { HeaderBar, HeaderBarBack, ContentBox, TextComponent, ExploringText } from './component';
import './App.css';

function App() {
  return (
    <div>
      <HeaderBar width={200} height={80} angle={0} offset={45} />
      <HeaderBarBack width={205} height={95} angle={-1} offset={40} />
      <ContentBox width={510} height={470} offset={100} fillColor="#171717" opacity="0.8" />
      <ContentBox width={720} height={400} offset={80} fillColor="#171717" opacity="0.6" />
      <TextComponent />
      <ExploringText />
    </div>
  );
}

export default App;
