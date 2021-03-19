import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.module.css';
import NavMenu from './container/sitenav/NavMenu';
import HomePage from './container/homepage/HomePage';





function App() {
  return (
    <>
    <Router>
      <NavMenu></NavMenu>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
