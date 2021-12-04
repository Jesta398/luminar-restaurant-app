import React from 'react'
import Home from './Home'
import { Container } from 'react-bootstrap'
// import Header from './Header'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import RestaurantDetails from './RestaurantDetails'
import { Link } from 'react-router-dom'
import Navigations from './Navigations'
function App() {
  return (
    <div>
  <Navigations/>
    <Router>
    <Container>
      <Route exact path='/' component={Home}/>
        <Route path='/restaurants/:id' component={RestaurantDetails}></Route>
   </Container>
   </Router>
   </div>
  );
  
}

export default App
