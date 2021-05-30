import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductListing from './components/ProductListing/ProductListing';

function App() {
  return (
    <div >
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <ProductListing></ProductListing>
          </Route>
          <Route path="/product/:productId">
            <ProductDetail></ProductDetail>
          </Route>
          <Route>
            404 Not Found !
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
