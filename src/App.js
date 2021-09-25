
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainExibitPage from './pages/Main-Exibit-Page/main-exibit-page';
import GlobalStyles from './globalStyles'

function App() {
  return (
    <Router>
        <GlobalStyles/>
        <Switch>
          <Route path='/' component={MainExibitPage} />
        </Switch>
    </Router>
  );
}

export default App;
