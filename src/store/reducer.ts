const defaultState = {
  message: 'hello',
  list: Array
};

export default function (state = defaultState, action: any) {
  switch (action.type) {
    case 'FETCH_LIST':
      return {
        ...state,
        list: action.list
      };

    default:
      return state;
  }
}
