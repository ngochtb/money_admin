/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch } from 'react-router-dom';
// import HomePage from 'containers/HomePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PrivateRoute from '../../components/PrivateRoute';
// import RouteWithLayout from '../../components/RouteWithLayout';
// import { Main as MainLayout } from '../../components/layouts';
// import DashboardView from '../DashboardView/index';
import MainLayout from '../../components/MainLayout';
import GlobalStyle from '../../global-styles';
import PurposePage from '../PurposePage';
import UserPage from '../UserPage';
import CurrencyPage from '../CurrencyPage';

export default function App() {
  return (
    <div>
      <Switch>
        {/* <Route exact path="/" component={HomePage} layout={MainLayout} /> */}
        {/* <Route component={NotFoundPage} /> */}
        {/* <Route layout={Login} /> */}
        <PrivateRoute
          exact
          path="/"
          layout={MainLayout}
          component={PurposePage}
          title="Mục đích"
        />
        <PrivateRoute
          path="/purposes"
          layout={MainLayout}
          component={PurposePage}
          title="Mục đích"
        />
        <PrivateRoute
          path="/users"
          layout={MainLayout}
          component={UserPage}
          title="Người dùng"
        />
        <PrivateRoute
          path="/currencies"
          layout={MainLayout}
          component={CurrencyPage}
          title="Ngoại tệ"
        />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
