import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavMenu from './container/sitenav/NavMenu'

import TaskPage from './container/landingpage/Taskpage'
import HomePage from './container/homepage/HomePage'



function App() {
  return (
    <>
    <Router>
      <NavMenu></NavMenu>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/task" component={TaskPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
