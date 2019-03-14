import * as React from 'react';
import SiteHeader from './components/SiteHeader';
import { HashRouter as Router, Route } from 'react-router-dom';
import routes from './router';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
        <SiteHeader/>

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

        {
          routes.map((route: any, i: number) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={props => (
                <route.component {...props} routes={route.routes}/>
              )}
            />
          ))
        }
        </React.Fragment>
      </Router>
    );
  }
}
