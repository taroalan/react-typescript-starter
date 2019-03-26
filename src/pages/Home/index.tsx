import * as React from 'react';
import Button from 'antd/lib/button';
import { connect } from 'react-redux';

import Counter from '../../components/Counter';
import { fetchList } from '../../store/action';

// console.log(Button);

interface IProps {
  list: [];
  fetchList: () => void;
}

class Home extends React.Component<IProps, {}> {
  static defaultProps: Partial<IProps> = {
    list: []
  };

  constructor(props: Readonly<IProps>) {
    super(props);
    console.log(this.props);
  }

  fetchData = () => {
    console.log('click');
    this.props.fetchList();
  }

  render() {
    console.log(this.props.list);
    return (
      <div className="home">
        <p>homepage</p>
        <ul>
          {
            this.props.list.map((item: any, i) => <li key={i}>{item.name} - {item.age}</li>)
          }
        </ul>
        <Button type="primary" onClick={this.fetchData}>Button</Button>
        <Counter />
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
    fetchList() {
      dispatch(fetchList());
    }
  };
};

export default connect(mapStateToProps, mapActionToProps)(Home);
