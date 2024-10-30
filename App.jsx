import React from "react";
import Inbox from "./screen/Inbox.jsx";
import { Provider } from "react-redux";
import store from "./state/store.jsx"



const App = () => {
  return (
      <Provider store={store}>
        <Inbox/>
      </Provider>
  );
};


export default App;


