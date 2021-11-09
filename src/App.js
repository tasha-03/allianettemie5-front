import Layout from './components/Layout'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
 

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            <Route exact path="/About" component={About} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
