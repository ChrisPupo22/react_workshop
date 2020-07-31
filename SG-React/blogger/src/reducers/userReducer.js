export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      console.log('working user reducer')
      return [...state, action.payload]; 
    default:
      return state;
  }
};
