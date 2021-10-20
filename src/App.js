import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import About from './Pages/About/About/About';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ServiceDetail from './Pages/Services/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SignIn from './Pages/SignIn/SignIn/SignIn';
import SignUp from './Pages/SignIn/SignUp/SignUp';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/service/:serviceId'>
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path='/about'>
              <About></About>
            </PrivateRoute>
            <Route path='/signin'>
              <SignIn></SignIn>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
