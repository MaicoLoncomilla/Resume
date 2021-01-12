import './App.css'
import Contact from './components/contact/Contact';
import Header from './components/header/Header'
import MySkill from './components/mySkill/MySkill';
import SectionImg from './components/sectionImg/SectionImg';
import SectionProjects from './components/sectionProjects/SectionProjects';

function App() {
  return (
    <div className="App">
      <Header/>
      <SectionImg/>
      <SectionProjects/>
      <MySkill/>
      <Contact/>
    </div>
  );
}

export default App;
