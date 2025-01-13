import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactSlice';
import authReducer from './authSlice';

// Configurare persist pentru auth
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'], // Persistăm doar token-ul utilizatorului
};

// Configurare persist pentru contacts
const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'], // Persistăm doar contactele
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Reducer pentru autentificare
    contacts: persistedContactsReducer, // Reducer pentru contacte
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/REGISTER',
        ],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
