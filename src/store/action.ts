const fetchListDo = () => {
  return {
    type: 'FETCH_LIST',
    list: [
      { name: 'xiaoli', age: 18 },
      { name: 'xiaowang', age: 20 }
    ]
  };
};

export const fetchList = () => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(fetchListDo());
    }, 200);
  };
};
