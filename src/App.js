import './App.css';
import Login from './components/LoginPage/Login'
import Register from './components/RegisterPage/Register'
import Home from './components/HomePage/Home'
import Create from './components/makePost/Create';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <div className='wrapper'>
          
          <Switch>

            {/* DEFAULT PAGE WHICH IS L */}

            <Route exact path='/'>
              <div className='container'>
                <div className='loginPage'>
                  <Login />
                </div>
              </div>
            </Route>
            

            {/* LOGIN PAGE */}
            
              <Route path='/login'>
                <div className='container'>
                  <div className='loginPage'>
                    <Login />
                  </div>
                </div>
              </Route>
           

            {/* REGISTER PAGE */}
              <Route path='/register'>
                <div className='container'>
                  <div className='registerPage'>
                    <Register />
                  </div>
                </div>
              </Route>
           

            {/* HOME PAGE */}
            <Route path='/home'>
              <Navbar />
              <div className='homeContainer'>
                <Home />
              </div>
            </Route>

            <Route path='/create'>
              <div className='createContainer'>
                <Create />
              </div>
            </Route>

          </Switch>
      
        </div>
      </div>
    </Router>
  );
}

export default App;
