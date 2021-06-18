import { HeaderBar, HeaderBarBack, ContentBox } from './component';
import './App.css';

function App() {
  return (
    <div>
      <HeaderBar width={200} height={80} angle={0} offset={45} />
      <HeaderBarBack width={205} height={95} angle={-1} offset={40} />
      <ContentBox width={510} height={470} offset={100} fillColor="#171717" opacity="0.8" />
      <ContentBox width={700} height={400} offset={80} fillColor="#171717" opacity="0.6" />
    </div>
  );
}

export default App;
