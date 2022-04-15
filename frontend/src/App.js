import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import OrderList from './components/OrderList';
import AdminNavbar from './components/AdminNavbar';
import Admin from './components/Admin';
import AddItem from './components/AddItem';
import AdminUsers from './components/AdminUsers';
import AdminEdit from './components/AdminEdit';
import Email from './components/Email';
import UpdatePassword from './components/UpdatePassword';

function App() {


  return (
    <>
      <Router>

        <Switch>

          <Route exact path="/">
            <Navbar></Navbar>
            <Home></Home>
          </Route>

          <Route exact path="/cart">
            <Navbar></Navbar>
            <Cart></Cart>
          </Route>

          <Route exact path="/login">
            <Navbar></Navbar>
            <Login></Login>
          </Route>

          <Route exact path="/register">
            <Navbar></Navbar>
            <Register></Register>
          </Route>

          <Route exact path="/orders">
            <Navbar></Navbar>
            <OrderList></OrderList>
          </Route>

          <Route exact path="/admin">
            <AdminNavbar></AdminNavbar>
            <Admin></Admin>
          </Route>

          <Route exact path="/add">
            <AdminNavbar></AdminNavbar>
            <AddItem></AddItem>
          </Route>

          <Route exact path="/users">
            <AdminNavbar></AdminNavbar>
            <AdminUsers></AdminUsers>
          </Route>

          <Route exact path="/admin/:dataid">
            <AdminNavbar></AdminNavbar>
            <AdminEdit></AdminEdit>
          </Route>

          <Route exact path="/email">
            <Email></Email>
          </Route>

        </Switch>

      </Router>

    </>
  );
}

export default App;


