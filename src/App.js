import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Shop from "./Pages/Shop/Shop";
import Footer from "./Pages/Shared/Footer/Footer";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PrivateRoute from "./Pages/Home/PrivateRoute/PrivateRoute";
import Notfound from "./Pages/NotFound/NotFound";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <Route exact path="/shop">
            <Header></Header>
            <Shop></Shop>
            <Footer></Footer>
          </Route>
          <PrivateRoute exact path="/checkout/:id">
            <Header></Header>
            <Checkout></Checkout>
            <Footer></Footer>
          </PrivateRoute>
          <Route exact path="/login">
            <Header></Header>
            <Login></Login>
            <Footer></Footer>
          </Route>
          <Route exact path="/register">
            <Header></Header>
            <Register></Register>
            <Footer></Footer>
          </Route>
          <Route exact path="*">
            <Header></Header>
            <Notfound></Notfound>
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
