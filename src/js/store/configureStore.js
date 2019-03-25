import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(ReduxThunk)
  );
  window.store = store;
    return store
}
