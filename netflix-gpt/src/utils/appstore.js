import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./Userslice";
import moviesreducer from "./movieslice";

const appstore = configureStore({
  reducer: {
    user: userreducer,
    movies : moviesreducer,
  },
});

export default appstore;
