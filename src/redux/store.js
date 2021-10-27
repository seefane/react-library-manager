import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { BookReducer } from "./reducers/books";
import { ReservedBookReducer } from "./reducers/reservedBooks";

const reducer = combineReducers({
  books: BookReducer,
  reservedbooks: ReservedBookReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
