import * as React from 'react';
import * as Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./About'),
  loading: () => <div>loading</div>
});

export default class About extends React.Component<{}, {}> {
  render() {
    return <LoadableComponent />;
  }
}
