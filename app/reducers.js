import { combineReducers } from 'redux';

const foo = (state = false, action)  =>{
  switch (action.type) {
  case "foo" :
    return true;
  default :
    return state;
  }
};

const bar = (state = 0, action) => {
  switch (action.type) {
  case "bar" :
    return state + 1;
  default :
    return state;
  }
};

const rootReducer = combineReducers({
  foo,
  bar
});

export default rootReducer;
