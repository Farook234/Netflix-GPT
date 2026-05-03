import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./Userslice";

const appstore = configureStore({
  reducer: {
    user: userreducer,
  },
});

export default appstore;
