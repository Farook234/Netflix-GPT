import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./Userslice";
import moviesreducer from "./movieslice";
import gptReducer from "./gptSlice"
import configReducer from "./configSlice";

const appstore = configureStore({
  reducer: {
    user: userreducer,
    movies : moviesreducer,
    gpt : gptReducer,
    config : configReducer,
  },
});

export default appstore;
