import React, { Component } from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./Sub1'),
  loading: () => <div>loading</div>,
});

export default class Sub1 extends Component {
  render() {
    return <LoadableComponent />;
  }
}
