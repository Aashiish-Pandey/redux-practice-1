const loggedReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return !state;
  }
};

export default loggedReducer;
