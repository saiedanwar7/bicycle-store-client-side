import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from"react-router-dom";
import Home from './Components/Home/Home/Home';
import About from './Components/Home/About/About';
import ExploreProducts from './Components/ExploreProducts/ExploreProducts';
import OrderAndDetails from './Components/OrderAndDetails/OrderAndDetails';
import Footer from './Components/Shared/Footer/Footer';
import NotFound from './Components/NotFound/NotFound'
import AuthProvider from './Context/AuthProvider';
import Login from './Components/LoginAndRegister/Login/Login';
import Register from './Components/LoginAndRegister/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">

<AuthProvider>

<Router>
  
   <Switch>

      <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/home">
          <Home></Home>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path='/register'>
          <Register></Register>
        </Route>

      <Route path="/about">
        <About></About>
      </Route>

        <Route path="/exploreproducts">
          <ExploreProducts></ExploreProducts>
        </Route>

        <PrivateRoute path='/dashboard'>
          <Dashboard></Dashboard>
        </PrivateRoute>
    
      <PrivateRoute path="/products/order_details/:product_id">
          <OrderAndDetails></OrderAndDetails>
      </PrivateRoute>

      <Route path="*">
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
