import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";

const contactsConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
  reducer: {
    contactsList: persistReducer(contactsConfig, contactsReducer),
    filters: filterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
