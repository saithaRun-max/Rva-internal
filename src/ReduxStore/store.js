import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "@/ReduxStore/slices/cartSlice";

import transitToggleStatus from "@/ReduxStore/slices/transitToggleSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    transitToggleStatus: transitToggleStatus,
  },
});

export default store;
