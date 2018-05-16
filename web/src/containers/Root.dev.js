import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import { Route } from 'react-router-dom'
import App from './App'
import UserPage from './UserPage'
import RepoPage from './RepoPage'
import AdminEmployeesPage from './Employees'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/admin/employees" component={AdminEmployeesPage} />
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
