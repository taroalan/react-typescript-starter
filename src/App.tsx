import React, { Component } from 'react';
import SiteHeader from '@/components/SiteHeader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from '@/router';

import BasicLayout from '@/layouts/BasicLayout';

export default class App extends Component {
  renderRoutes() {
    return routes.map((route: any, i: number) => (
      <Route
        key={i}
        path={route.path}
        exact={route.exact}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    ));
  }

  render() {
    return (
      <Router>
        <>
          <BasicLayout>
            <SiteHeader />
            {this.renderRoutes()}
          </BasicLayout>
          {/* {
          routes.map((route: any, i: number) =>
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              // component 不能够传递props，比如把子路由信息传递给组件
              // 可以用下面的 render 来代替
              component={route.component}
            />
          )
        } */}
        </>
      </Router>
    );
  }
}
