<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 4500abf61520e0324aac24c710850cd5043d9328
  );
}

export default App;
