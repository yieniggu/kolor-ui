import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";
import { connect } from 'react-redux';

export const KolorApp = () => {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};
