import * as React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';

import Counter from '../../components/Counter';
import { fetchList } from '../../store/action';

// console.log(Button);

interface HomeProps {
  list: Array<any>;
  fetchList: Function;
}

class Home extends React.Component<HomeProps, {}> {
  constructor(props: Readonly<HomeProps>) {
    super(props);
    console.log(this.props);
  }

  fetchData() {
    this.props.fetchList();
  }

  render() {
    console.log(this.props.list);
    return (
      <div className="home">
        <p>homepage</p>
        <ul>
          {
            this.props.list.map((item, i) => <li key={i}>{item.name} - {item.age}</li>)
          }
        </ul>
        <Button type="primary" onClick={this.fetchData.bind(this)}>Button</Button>
        <Counter/>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    list: state.list
  };
};

const mapActionToProps = (dispatch: any) => {
  return {
    fetchList: () => dispatch(fetchList)
  };
};

export default connect(mapStateToProps, mapActionToProps)(Home);
