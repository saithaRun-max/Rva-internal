"use client";

import React from "react";
import Header from "./header/Header";

import BodyMain from "./body/BodyMain";

import { Provider } from "react-redux";
import store from "@/ReduxStore/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className=" ">
        <Header />
        <BodyMain />
      </div>
    </Provider>
  );
};

export default App;
