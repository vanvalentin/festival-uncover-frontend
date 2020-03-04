import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Festivals from './pages/Festivals';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/festivals' component={Festivals} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/about' component={About} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
