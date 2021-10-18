import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About/About';
import Signin from './Pages/Authentication/SignIn/Signin';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/blogs'>
            <Blogs></Blogs>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/signIn'>
            <Signin></Signin>
          </Route>
          <Route path='/signUp'>
            <SignUp></SignUp>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
