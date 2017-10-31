export default function(state = null, action) {
  switch(action.type) {
    case 'SOME_TYPE':
      return action.payload;
    default:
      return state;
  }
}
