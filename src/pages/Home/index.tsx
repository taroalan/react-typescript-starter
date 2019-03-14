import * as React from 'react';
// import { Button } from 'antd';

import Counter from '../../components/Counter';

// console.log(Button);

export default class Home extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <p>homepage</p>
        {/* <Button type="primary">Button</Button> */}
        <Counter/>
      </div>
    );
  }
}
