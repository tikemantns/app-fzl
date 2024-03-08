import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist';

import persistentSlice from './persistentSlice'
// import deviceSlice from './deviceSlice';
import reducer from './deviceSlice';

const persistConfig = {
    key: 'root',
    storage: storageSession,
}

const persistent = persistReducer(persistConfig, persistentSlice.reducer);

const store = configureStore({
    reducer: {
        persistentSlice: persistent,
        reducer
        // deviceSlice: deviceSlice
    },
});

// console.log(store.getState(), "store");

setupListeners(store.dispatch);

export const persistor = persistStore(store)

export default store;
