import * as React from 'react';
import { Link, Route } from 'react-router-dom';

interface NestRoutesProps {
  routes: Array<any>;
}

export default class NestRoutes extends React.Component<NestRoutesProps, {}> {
  constructor(props: Readonly<any>) {
    super(props);
    console.log(this.props.routes);
  }

  render() {
    return (
      <div>
        <p>nestroutes</p>
        <Link to="/nestroutes/sub1">Sub1</Link>
        <br/>
        <Link to="/nestroutes/sub2">Sub2</Link>
        <br/>
        {
          this.props.routes.map((route: any, i: number) =>
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          )
        }
      </div>
    );
  }
}
