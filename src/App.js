
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainExhibitPage from './pages/Main-Exhibit-Page/main-exhibit-page';
import GlobalStyles from './globalStyles'

function App() {
  return (
    <Router>
        <GlobalStyles/>
        <Switch>
          <Route path='/' component={MainExhibitPage} />
        </Switch>
    </Router>
  );
}

export default App;
