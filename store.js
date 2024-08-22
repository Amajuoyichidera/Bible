import { configureStore } from "@reduxjs/toolkit";
import bibleSlice from "./bibleSlice";

const store  = configureStore({
    reducer: {
        bible: bibleSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['your/action/type'],
                // Ignore these field paths in all actions
                ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
                // Ignore these paths in the state
                ignoredPaths: ['items.dates'],
                // Increase the timeout threshold
                warnAfter: 1000,  // Increase the threshold to 1000ms
            },
        }),
})

export default store;