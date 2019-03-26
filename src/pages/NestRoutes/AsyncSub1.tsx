import * as React from 'react';
import * as Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./Sub1'),
  loading: () => <div>loading</div>
});

export default class Sub1 extends React.Component<{}, {}> {
  render() {
    return <LoadableComponent />;
  }
}
