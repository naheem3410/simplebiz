import logo from './logo.svg';
import './App.css';
import TopNavigation from './TopNavigation'
import FeatureImage from './FeatureImage'
import CenterText from './CenterText'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNavigation />
        <FeatureImage />
        <CenterText />
        <Footer/>
      </header>
    </div>
  );
}

export default App;
