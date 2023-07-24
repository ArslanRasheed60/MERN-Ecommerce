import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/order/:id' Component={OrderScreen} />
            <Route path="/login/shipping" Component={ShippingScreen} />
            <Route path="/payment" Component={PaymentScreen} />
            <Route path="/placeorder" Component={PlaceOrderScreen} />
            <Route path="/login" Component={LoginScreen} />
            <Route path="/register" Component={RegisterScreen} />
            <Route path="/profile" Component={ProfileScreen} />
            <Route path="/product/:id" Component={ProductScreen} />
            <Route path="/cart/:id?" Component={CartScreen} />
            {/* <Route path='/admin/userlist' component={UserListScreen} /> */}
            {/* <Route path='/admin/user/:id/edit' component={UserEditScreen} /> */}
            {/* <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          /> */}
            {/* <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          /> */}
            {/* <Route path='/admin/product/:id/edit' component={ProductEditScreen} /> */}
            {/* <Route path='/admin/orderlist' component={OrderListScreen} /> */}
            <Route path="/search/:keyword" Component={HomeScreen} />
            <Route path="/page/:pageNumber" Component={HomeScreen} />
            <Route
              path="/search/:keyword/page/:pageNumber"
              Component={HomeScreen}
            />
            <Route path="/" Component={HomeScreen} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
