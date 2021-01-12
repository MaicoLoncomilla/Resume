import './App.css'
import Header from './components/header/Header'
import SectionImg from './components/sectionImg/SectionImg';
import SectionProjects from './components/sectionProjects/SectionProjects';

function App() {
  return (
    <div className="App">
      <Header/>
      <SectionImg/>
      <SectionProjects/>
    </div>
  );
}

export default App;
