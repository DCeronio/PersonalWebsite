import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Contact from './components/Contact.js';
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
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
        </div>  
    </Router>
  );
}

export default App;
