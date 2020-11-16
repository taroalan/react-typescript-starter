import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';

import Counter from '../../components/Counter';
import { fetchList } from '../../store/action';

import QAPIC from '../../assets/qa.jpeg';

// console.log(Button);

console.log(QAPIC);

interface Props {
  list: [];
  fetchList: () => void;
}

interface State {}

class Home extends Component<Props, State> {
  static defaultProps: Partial<Props> = {
    list: [],
  };

  constructor(props: Readonly<Props>) {
    super(props);
    console.log(this.props);
  }

  fetchData = () => {
    console.log('click');
    this.props.fetchList();
  };

  render() {
    console.log(this.props.list);
    return (
      <div className="home">
        <p>homepage</p>
        <ul>
          {this.props.list.map((item: any, i) => (
            <li key={i}>
              {item.name} - {item.age}
            </li>
          ))}
        </ul>
        <Button type="primary" onClick={this.fetchData}>
          Button
        </Button>
        <Counter />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    list: state.list,
  };
};

const mapActionToProps = (dispatch: any) => {
  return {
    fetchList() {
      dispatch(fetchList());
    },
  };
};

export default connect(mapStateToProps, mapActionToProps)(Home);
