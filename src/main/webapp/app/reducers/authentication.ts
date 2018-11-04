export const LOGIN_DUMMY = 'LOGIN_DUMMY';
export const correctUser = {
  username: 'admin',
  password: '12345678'
};
export const login = (username, password, callback) => {
  if (username===correctUser.username && password ===correctUser.password){
    localStorage.setItem(LOGIN_DUMMY, JSON.stringify(correctUser));
    callback(true)
  }else callback(false);
};

export const logout = (callback) => {
  if (localStorage.getItem(LOGIN_DUMMY)){
    localStorage.removeItem(LOGIN_DUMMY);
    callback(true);
  }
};

export const ACTION_TYPES = {

};

const initialState = {

};



export default (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
}
