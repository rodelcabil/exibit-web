
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainExhibitPage from './pages/Main-Exhibit-Page/main-exhibit-page';
import GlobalStyles from './globalStyles'
import ProductDetailsExhibitPage from './pages/Product-Details-Exhibit-Page/product-details-exhibit-page';

function App() {
  return (
    <Router >
        <GlobalStyles/>
        <Switch>
          {/* <Route path='/' component={Homepage} /> */}
          <Route exact path='/' component={MainExhibitPage} />
          <Route path='/productdetail' component={ProductDetailsExhibitPage} />
        </Switch>
    </Router>
  );
}

export default App;
