import './App.css';
import Home from './components/Home.js';
import SkillPage from './components/SkillPage.js';
import Contact from './components/Contact.js';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/SkillPage">
            <SkillPage/>
          </Route>
        </Switch>
        </div>  
    </Router>
  );
}

export default App;
