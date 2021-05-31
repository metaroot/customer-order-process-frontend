import React from "react";
// import router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import pages
import About from "./pages/About";
import Cart from "./pages/Cart";
import AdminPanel from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
// import header
import Header from "./components/Header";
import Alert from "./components/Alert";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <Router>
      <Alert />
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route exact path="/about">
          <Header />
          <About />
        </Route>
        <Route exact path="/cart">
          <Header />
          <Cart />
        </Route>
        <Route exact path="/login">
          <Header />
          <Login />
        </Route>
        <PrivateRoute path="/checkout" name="john">
          <Header />
          <Checkout />
        </PrivateRoute>
        <Route exact path="/products">
          <Header />
          <Products />
        </Route>
        <Route exact path="/admin">
          <AdminPanel />
        </Route>
        <Route path="/products/:id" children={<ProductDetails />}></Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
