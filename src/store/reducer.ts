const defaultState = {
  message: 'hello',
  list: [] as object[]
};

export default function (state = defaultState, action: any) {
  console.log(action);
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
