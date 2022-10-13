import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Authentication/Login/Login';
import ExploreServices from './Pages/ExploreServices/ExploreServices';
import Dashboard from './Pages/Dashboard/Dashboard';
import AdminRoute from './Pages/Authentication/AdminRoute/AdminRoute';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders/ManageAllOrders';
import AddBikes from './Pages/AddBikes/AddBikes';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import Pay from './Pages/Pay/Pay';
import MyOrders from './Pages/MyOrders/MyOrders/MyOrders';
import AddReview from './Pages/AddReview/AddReview';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import ManageBikes from './Pages/ManageBikes/ManageBikes/ManageBikes';
import Register from './Pages/Authentication/Register/Register';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Dashboard />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/services">
              <ExploreServices />
            </Route>
            <AdminRoute path="/manageAllOrders">
              <ManageAllOrders/>
            </AdminRoute>
            <AdminRoute path="/manageBikes">
              <ManageBikes/>
            </AdminRoute>
            <AdminRoute path="/addBikes">
              <AddBikes/>
            </AdminRoute>
            <AdminRoute path="/makeAdmin">
              <MakeAdmin/>
            </AdminRoute>
            <PrivateRoute path="/pay">
              <Pay/>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <MyOrders/>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <AddReview/>
            </PrivateRoute>
            <PrivateRoute path="/placeOrder/:orderId">
              <PlaceOrder/>
            </PrivateRoute>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
