import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreens from './screen/HomeScreens'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProductScreen from './screen/ProductScreen';
import CartScreen from './screen/cartScreens'
import LoginScreen from './screen/userScreen'
import RegisterScreen from './screen/RegisterScreen'
import ProfileScreen from './screen/ProfileScreen'
import ShippingScreen from'./screen/ShippingScreen'
import PaymentScreen from'./screen/PaymentScreen'
import PlaceorderScreen from'./screen/PlaceorderScreen'
import OrderScreen from'./screen/OrderScreen'


function App() {
  return (
    <Router>
    <Header />
      <main className="py-3">
        <Container >
       <Route path='/' component={HomeScreens} exact />
       <Route path= '/product/:id' component={ProductScreen} />
       <Route path='/cart/:id' component={CartScreen} />
       <Route path='/login' component={LoginScreen} />
       <Route path='/register' component={RegisterScreen} />
       <Route path='/profile' component={ProfileScreen} />
       <Route path='/shipping' component={ShippingScreen} />
       <Route path='/payment' component={PaymentScreen} />
       <Route path='/placeorder' component={PlaceorderScreen} />
       <Route path='/order/:id' component={OrderScreen} />

      </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App;
