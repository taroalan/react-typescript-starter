import React, { Component } from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./About'),
  loading: () => <div>loading</div>,
});

export default class About extends Component {
  render() {
    return <LoadableComponent />;
  }
}
