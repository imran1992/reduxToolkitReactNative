import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
//import looger from 'redux-logger';
import {configureStore} from '@reduxjs/toolkit';
import persistConfig from './persistConfig';
import rootReducer from './features';
import {apiSlice} from './features/dogs-api-slice';

const REDUX = () => {
  const reducer = persistReducer(persistConfig, rootReducer);
  const Store = configureStore({
    reducer,
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(apiSlice.middleware);
      //.concat(looger);
    },
  });
  const Persistor = persistStore(Store);
  return {Store, Persistor};
};
const ReduxProvider = REDUX();
export default ReduxProvider;
export type AppDispatch = typeof ReduxProvider.Store.dispatch;
export type RootState = ReturnType<typeof ReduxProvider.Store.getState>;
