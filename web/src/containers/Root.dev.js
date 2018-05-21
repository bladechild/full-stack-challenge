import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import { Route } from 'react-router-dom'
import App from './App'
import UserPage from './UserPage'
import RepoPage from './RepoPage'
import AdminEmployeesPage from './Employees';
import AdminReviewPage from './Reviews';
import ClientEmployeePage from "./Employee";

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/admin/employees" component={AdminEmployeesPage} />
      <Route path='/admin/reviews' component={AdminReviewPage} />
      <Route path='/client/employee/:id' component={ClientEmployeePage} />
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
