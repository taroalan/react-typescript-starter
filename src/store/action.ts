export const fetchList = () => {
  return {
    type: 'FETCH_LIST',
    list: [
      { name: 'xiaoli', age: 18 },
      { name: 'xiaowang', age: 20 }
    ]
  };
};
