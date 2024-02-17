import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist';

import persistentSlice from './persistentSlice'

const persistConfig = {
    key: 'root',
    storage: storageSession,
}

const persistent = persistReducer(persistConfig, persistentSlice.reducer)

const store = configureStore({
    reducer: {
        persistentSlice: persistent,
    },
});

setupListeners(store.dispatch);

export const persistor = persistStore(store)

export default store;
