import React, { Component } from 'react';
import axios from 'axios'
import './CSS/style.css';
import { Route, BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import config from './config'
import User from './components/User/User';
import NewUser from './components/User/NewUser';
import DeleteUser from './components/User/DeleteUser';
import Supplier from './components/Supplier/Supplier';
import NewSupplier from './components/Supplier/NewSupplier'
import UpdateSupplier from './components/Supplier/UpdateSupplier'

import Bill from './components/Book/Bill'

// import Auth from './components/Auth/Auth'
// import Admin from './components/Auth/Admin'
import HomeScreen from './components/HomeScreen';

import UpdateUser from './components/User/UpdateUser';
import DeleteSupplier from './components/Supplier/DeleteSupplier';

import WareHouse from './components/Book/WareHouse';
import BookImported from './components/Book/BookImported';
import NewBook from './components/Book/NewBook';
import DeleteBook from './components/Book/DeleteBook';
import Test from './components/Book/Test';

import AllBill from './components/Bill/AllBills'
import NewBill from './components/Bill/NewBill'
import DeleteBill from './components/Bill/DeleteBill'


import Login from "./components/Auth/Login"
import Staff from './components/Staff/Staff';
import NewStaff from './components/Staff/NewStaff';
import DeleteStaff from './components/Staff/DeleteStaff';

axios.defaults.withCredentials = true;
// import axios from './axiosCustomer'


class App extends Component {
  componentDidMount() {

  }
  render() {
    return (

      <BrowserRouter>
        <div>
          <Route exact path='/home' component={HomeScreen} />
          {/* User Route */}
          <Route exact path='/users' component={User} />
          <Route exact path='/users/create-new-user' component={NewUser} />
          <Route exact path='/detail-user/:IdUser' component={User} />
          <Route exact path='/delete-user/' component={DeleteUser} />
          <Route exact path='/users/update' component={UpdateUser} />

          <Route exact path='/suppliers' component={Supplier} />
          <Route exact path='/suppliers/new-supplier' component={NewSupplier} />
          <Route exact path='/suppliers/update' component={UpdateSupplier} />
          <Route exact path='/suppliers/delete' component={DeleteSupplier} />

          <Route exact path='/books' component={WareHouse} />
          <Route exact path='/books/new-book' component={NewBook} />
          <Route exact path='/books/imported' component={BookImported} />
          <Route exact path='/books/delete' component={DeleteBook} />


          <Route exact path='/bill/all-bills' component={AllBill} />
          <Route exact path='/bill/new-bill' component={NewBill} />
          <Route exact path='/bill/delete' component={DeleteBill} />

          <Route exact path='/' component={Login} />
          <Route exact path='/staff/all-staff' component={Staff} />
          <Route exact path='/staff/new-staff' component={NewStaff} />
          <Route exact path='/staff/delete-staff' component={DeleteStaff} />

          <Route exact path='/test' component={Test} />
          {/* <Route exact path='/admin' component={Admin} /> */}

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
