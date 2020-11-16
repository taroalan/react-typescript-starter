type AnyObj = { [key: string]: any };

interface StateData {
  message: string;
  list: AnyObj[];
}

const defaultState: StateData = {
  message: 'hello',
  list: [],
};

export default function (state = defaultState, action: any) {
  console.log(action);
  switch (action.type) {
    case 'FETCH_LIST':
      return {
        ...state,
        list: action.list,
      };

    default:
      return state;
  }
}
