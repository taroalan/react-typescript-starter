import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

interface Props {
  routes: any[];
}

interface State {}

export default class NestRoutes extends Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    console.log(this.props.routes);
  }

  render() {
    return (
      <div>
        <p>nestroutes</p>
        <Link to="/nestroutes/sub1">Sub1</Link>
        <br />
        <Link to="/nestroutes/sub2">Sub2</Link>
        <br />
        {this.props.routes.map((route: any, i: number) => (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </div>
    );
  }
}
