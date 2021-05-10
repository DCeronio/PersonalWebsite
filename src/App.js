import './App.css';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import Footer from './components/Footer';
import Skills from './components/Skills';
import ProjectDisplay from './components/ProjectDisplay'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/SkillPage">
            <div className="SkillPage">
              <Skills/>
            </div>
          </Route>
          <Route path="/ProjectPage" component={ProjectPage}/>
          <Route path="/Contact" component={Contact}/>
          <Route path={`/project/:index`} component={ProjectDisplay}/>
        </Switch>
        <Footer/>
        </div>  
    </Router>
  );
}

export default App;
